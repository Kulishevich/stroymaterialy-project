import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import s from "./RequestDiscountPopup.module.scss";
import { RequestDiscountItem } from "../request-discount-item";
import { useForm } from "react-hook-form";
import { useCreatePriceOfferMutation } from "@/api/products/products.api";
import { useTranslations } from "next-intl";
import { showToast } from "@/shared/ui/toast";
import { Product } from "@/api/products/products.types";

export type FormValues = {
  productId: string;
  price: string;
  count: number;
};

type RequestDiscountPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
};

export const RequestDiscountPopup = ({
  isOpen,
  setIsOpen,
  product,
}: RequestDiscountPopupProps) => {
  const t = useTranslations("cart.request_discount_popup");
  const [createPriceOffer] = useCreatePriceOfferMutation();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      productId: product.id,
      count: 1,
      price: product.price,
    },
  });

  const formHandler = handleSubmit(async (data) => {
    const reqData = {
      ...data,
      price: parseFloat(
        data.price
          .replace(/\s/g, "")
          .replace(/[^\d,.-]/g, "")
          .replace(",", ".")
      ),
    };
    console.log(reqData);
    try {
      await createPriceOffer([reqData]);
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
        <RequestDiscountItem control={control} product={product} />
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
