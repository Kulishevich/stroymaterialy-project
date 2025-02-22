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
    } catch (err: unknown) {
      console.error(err);
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Запросить скидку
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
          <Button onClick={formHandler}>Запросить скидку</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Отменить
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
