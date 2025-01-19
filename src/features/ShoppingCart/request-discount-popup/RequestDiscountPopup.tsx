import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./RequestDiscountPopup.module.scss";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Counter } from "@/components/counter";
import { TextField } from "@/components/ui/text-field";

type Order = {
  id: string;
  image: string;
  title: string;
  price: string;
};

type RequestDiscountPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orders: Order[];
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
        {orders.map((order) => (
          <div key={order.id} className={s.order}>
            <div className={s.card}>
              <Image
                src={order.image}
                width={100}
                height={100}
                alt="product image"
              />
              <Typography variant="body_3">{order.title}</Typography>
            </div>
            <div className={s.myPrice}>
              <Typography>Моя предложенная цена (общая сумма)</Typography>
              <TextField />
            </div>
            <div className={s.counter}>
              <Typography>Количество (шт)</Typography>
              <Counter />
            </div>
          </div>
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
