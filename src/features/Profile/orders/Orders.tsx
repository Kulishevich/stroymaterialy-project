import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./Orders.module.scss";
import { useGetUserOrdersQuery } from "@/api/user/user.api";
import { OrderItem } from "../order-item";

export const Orders = () => {
  const { data: orders } = useGetUserOrdersQuery();

  console.log("orders:", orders?.data);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Заказы
      </Typography>
      <div className={s.ordersContainer}>
        {orders?.data.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};
