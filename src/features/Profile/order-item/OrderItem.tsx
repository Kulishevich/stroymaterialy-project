import { OrderItemResponse } from "@/api/orders/orders.types";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";

import s from "./OrderItem.module.scss";
import { OrderPopup } from "../order-popup";
import { useTranslations } from "next-intl";

type OrderItemProps = {
  order: OrderItemResponse;
};

export const OrderItem = ({ order }: OrderItemProps) => {
  const t = useTranslations("profile.orders.order");
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className={s.orderCard}>
      <div className={s.orderTitle}>
        <Typography variant="body_1">
          {t("order_id")}
          <Typography as="span" variant="body_2">
            {" "}
            №{order.id}
          </Typography>
        </Typography>
      </div>
      <div className={s.orderFields}>
        <Typography variant="body_3">
          {t("status")}
          <Typography as="span" variant="body_3">
            {order.status}
          </Typography>
        </Typography>
        <Typography variant="body_3">
          {t("payment_method")}
          <Typography as="span" variant="body_3">
            {order.method}
          </Typography>
        </Typography>
        <Typography variant="body_3">
          {t("address")}
          <Typography as="span" variant="body_3">
            {order?.address?.address},{order?.address?.region?.name},
            {order?.address?.details}
          </Typography>
        </Typography>
        <Typography variant="body_3">
          {t("delivery_date")}
          <Typography as="span" variant="body_3">
            {order.date}
          </Typography>
        </Typography>
        <Typography variant="body_3">
          {t("price")}
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
        {t("read_more")}
      </Typography>
      <OrderPopup
        isOpen={isOrderOpen}
        setIsOpen={setIsOrderOpen}
        orderId={order.id}
      />
    </div>
  );
};
