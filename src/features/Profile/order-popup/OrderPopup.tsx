import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { OrderCard } from "../order-card";
import {
  useDeleteOrderMutation,
  useGetOrderQuery,
} from "@/api/orders/orders.api";
import { useTranslations } from "next-intl";
import s from "./OrderPopup.module.scss";
import { showToast } from "@/shared/ui/toast";

type OrderPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orderId: string;
};

export const OrderPopup = ({ isOpen, setIsOpen, orderId }: OrderPopupProps) => {
  const t = useTranslations("profile.orders.order");
  const [isOpenCloseModal, setIsOpenCloseModal] = useState(false);
  const { data: order } = useGetOrderQuery({ id: orderId });

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
      showToast({ message: "Заказ успешно удалён", variant: "success" });
      setIsOpen(false);
    } catch (err: unknown) {
      showToast({ message: "Ошибка удаления заказа", variant: "error" });
      console.log(err);
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
                {t("order_id")}{" "}
                <Typography as="span" variant="body_2">
                  № {order?.data.id}
                </Typography>
              </Typography>
            </div>
            <div className={s.orderFields}>
              <Typography variant="body_3">
                {t("status")}
                <Typography as="span" variant="body_3">
                  {order?.data.status}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                {t("payment_method")}
                <Typography as="span" variant="body_3">
                  {order?.data.method}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                {t("address")}
                <Typography as="span" variant="body_3">
                  {order?.data?.address?.address},
                  {order?.data?.address?.region.name},
                  {order?.data?.address?.details}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                {t("delivery_date")}
                <Typography as="span" variant="body_3">
                  {order?.data.date}
                </Typography>
              </Typography>
              <Typography variant="body_3">
                {t("price")}
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
                {t("cancel")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <Typography variant="h3" as="h3">
              {t("confirmation")}
            </Typography>
            <div className={s.buttonsContainer}>
              <Button onClick={handleDeleteOrder}>{t("yes")}</Button>
              <Button
                variant="secondary"
                onClick={() => setIsOpenCloseModal(false)}
              >
                {t("no")}
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
