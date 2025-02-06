import { OrderItemResponse } from "@/api/orders/orders.types";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";

import s from "./OrderItem.module.scss";
import { OrderPopup } from "../order-popup";

type OrderItemProps = {
  order: OrderItemResponse;
};

export const OrderItem = ({ order }: OrderItemProps) => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className={s.orderCard}>
      <div className={s.orderTitle}>
        <Typography variant="body_1">
          Заказ №{" "}
          <Typography as="span" variant="body_2">
            {order.id}
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
            {order.method}
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
            {order.date}
          </Typography>
        </Typography>
        <Typography variant="body_3">
          Цена:
          <Typography as="span" variant="body_3">
            {order.totalWithDelivery}
          </Typography>
        </Typography>
      </div>
      <Typography
        as="button"
        variant="body_6"
        className={s.button}
        onClick={() => setIsOrderOpen(true)}
      >
        Подробнее
      </Typography>
      <OrderPopup
        isOpen={isOrderOpen}
        setIsOpen={setIsOrderOpen}
        orderId={order.id}
      />
    </div>
  );
};
