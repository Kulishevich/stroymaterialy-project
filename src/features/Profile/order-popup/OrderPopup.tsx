import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Typography } from "@/components/ui/typography";
import s from "./OrderPopup.module.scss";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { OrderCard } from "../order-card";
import {
  useDeleteOrderMutation,
  useGetOrderQuery,
} from "@/api/orders/orders.api";

type OrderPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orderId: string;
};

export const OrderPopup = ({ isOpen, setIsOpen, orderId }: OrderPopupProps) => {
  const [isOpenCloseModal, setIsOpenCloseModal] = useState(false);
  const { data: order } = useGetOrderQuery({ id: orderId });
  console.log(order);

  const [deleteOrder] = useDeleteOrderMutation();

  const handleCloseModal = () => {
    if (isOpenCloseModal) {
      setIsOpenCloseModal(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      await deleteOrder({ id: orderId });
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Overlay className={s.overlay} onClick={handleCloseModal} />
      <Dialog.Content className={s.content}>
        {!isOpenCloseModal ? (
          <>
            <div className={s.orderTitle}>
              <Typography variant="body_1">
                Заказ{" "}
                <Typography as="span" variant="body_2">
                  № {order?.data.id}
                </Typography>
              </Typography>
            </div>
            <div className={s.orderFields}>
              <Typography variant="body_3">
                Статус заказа:
                <Typography as="span" variant="body_3">
                  {order?.data.status}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Способ оплаты:
                <Typography as="span" variant="body_3">
                  {order?.data.method}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Адрес:
                <Typography as="span" variant="body_3">
                  {order?.data.address}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                День доставки:
                <Typography as="span" variant="body_3">
                  {order?.data.date}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                Цена:
                <Typography as="span" variant="body_3">
                  {order?.data.totalWithDelivery}
                </Typography>
              </Typography>
            </div>

            <div className={s.cardsContainer}>
              {order?.data.items?.map((item) => (
                <OrderCard key={item.id} orderItem={item} />
              ))}
            </div>

            <div className={s.buttonsContainer}>
              <Button onClick={() => setIsOpen(false)}>Назад</Button>
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
              <Button variant="secondary" onClick={handleDeleteOrder}>
                Да
              </Button>
            </div>
          </>
        )}

        <Button
          variant={"only_icon"}
          className={s.closeButton}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
