import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { CartList } from "@/api/cart/cart.types";
import s from "./RequestDiscountPopup.module.scss";
import { RequestDiscountItem } from "../request-discount-item";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreatePriceOfferMutation } from "@/api/products/products.api";
import { useTranslations } from "next-intl";
import { showToast } from "@/components/ui/toast";

type RequestDiscountPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orders: CartList[];
};

export const RequestDiscountPopup = ({
  isOpen,
  setIsOpen,
  orders,
}: RequestDiscountPopupProps) => {
  const t = useTranslations("cart.request_discount_popup");
  const [createPriceOffer] = useCreatePriceOfferMutation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      orders: orders.map((order) => ({
        productId: order.product.id,
        count: order.count,
        price: order.total,
      })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "orders",
  });

  const formHandler = handleSubmit(async (data) => {
    const reqData = data.orders.map((order) => {
      return {
        ...order,
        price: parseFloat(
          order.price
            .replace(/\s/g, "")
            .replace(/[^\d,.-]/g, "")
            .replace(",", ".")
        ),
      };
    });

    try {
      await createPriceOffer(reqData);
      setIsOpen(false);
      showToast({
        message: t("request_discount_toast"),
        variant: "success",
        description: t("request_discount_desctiption"),
      });
    } catch (err: unknown) {
      console.error(err);
      showToast({
        message: t("request_discount_error"),
        variant: "error",
        description: t("request_discount_error_description"),
      });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          {t("title")}
        </Typography>
        {fields?.map((field, index) => (
          <RequestDiscountItem
            key={field.id}
            control={control}
            index={index}
            order={orders[index]}
          />
        ))}
        <div className={s.buttonsContainer}>
          <Button onClick={formHandler}> {t("submit_button")}</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("cancel_button")}
          </Button>
        </div>
        <Button
          variant={"icon"}
          className={s.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
