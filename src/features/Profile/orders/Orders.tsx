import { Typography } from "@/shared/ui/typography";
import React from "react";
import s from "./Orders.module.scss";
import { OrderItem } from "../order-item";
import { useTranslations } from "next-intl";
import { GetOrdersResponse } from "@/api/user/user.types";

export const Orders = ({
  orders,
}: {
  orders: GetOrdersResponse | undefined;
}) => {
  const t = useTranslations("profile.orders");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <div className={s.ordersContainer}>
        {orders?.data.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};
