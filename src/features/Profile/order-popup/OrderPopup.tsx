import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Typography } from "@/components/ui/typography";
import s from "./OrderPopup.module.scss";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { OrderType } from "../orders";
import { OrderCard } from "../order-card";

type OrderPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  order: OrderType;
};

export const OrderPopup = ({ isOpen, setIsOpen, order }: OrderPopupProps) => {
  const [isOpenCloseModal, setIsOpenCloseModal] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        {!isOpenCloseModal ? (
          <>
            <div className={s.orderTitle}>
              <Typography variant="body_1">
                Заказ{" "}
                <Typography as="span" variant="body_2">
                  № {order.orderNumber}
                </Typography>
              </Typography>
            </div>
            <div className={s.orderFields}>
              <Typography variant="body_3">
                Статус заказа:
                <Typography as="span" variant="body_3">
                  {order.status}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Способ оплаты:
                <Typography as="span" variant="body_3">
                  {order.paymentMethod}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Адрес:
                <Typography as="span" variant="body_3">
                  {order.address}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                День доставки:
                <Typography as="span" variant="body_3">
                  {order.dayOfDelivery}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Цена:
                <Typography as="span" variant="body_3">
                  {order.price}
                </Typography>
              </Typography>
            </div>

            <div className={s.cardsContainer}>
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>

            <div className={s.buttonsContainer}>
              <Button>Назад</Button>
              <Button variant="secondary" onClick={setIsOpenCloseModal}>
                Отменить
              </Button>
            </div>
          </>
        ) : (
          <>
            <Typography variant="h3" as="h3">
              Вы уверены, что хотите отменить заказ?
            </Typography>
            <div className={s.buttonsContainer}>
              <Button onClick={() => setIsOpenCloseModal(false)}>Нет</Button>
              <Button variant="secondary">Да</Button>
            </div>
          </>
        )}

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
