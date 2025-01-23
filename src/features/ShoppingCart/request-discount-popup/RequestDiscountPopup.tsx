import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { CartList } from "@/api/cart/cart.types";
import s from "./RequestDiscountPopup.module.scss";
import { RequestDiscountItem } from "../request-discount-item";

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
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Запросить скидку
        </Typography>
        {orders?.map((order) => (
          <RequestDiscountItem key={order.product.id} order={order} />
        ))}
        <div className={s.buttonsContainer}>
          <Button>Запросить скидку</Button>
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
