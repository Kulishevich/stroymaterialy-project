import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import s from "./Orders.module.scss";
import { OrderPopup } from "../order-popup";
import { useGetUserOrdersQuery } from "@/api/user/user.api";

export type OrderType = {
  id: string;
  orderNumber: string;
  status: string;
  paymentMethod: string;
  address: string;
  dayOfDelivery: string;
  price: string;
};

const orders: OrderType[] = [
  {
    id: "1",
    orderNumber: "874a2d8d-5b48-4b0d-a05a-c33762def9b4",
    status: "Новое",
    paymentMethod: "С картой на месте",
    address: "8F9P+XJF, Charents St, Yeghvard, Армения",
    dayOfDelivery: "дек 14, 2024 09:55-09:55",
    price: "1 850,00 драм",
  },
  {
    id: "2",
    orderNumber: "874a2d8d-5b48-4b0d-a05a-c33762def9b4",
    status: "Новое",
    paymentMethod: "С картой на месте",
    address: "8F9P+XJF, Charents St, Yeghvard, Армения",
    dayOfDelivery: "дек 14, 2024 09:55-09:55",
    price: "1 850,00 драм",
  },
];

export const Orders = () => {
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [activeOrder, setActiveOrder] = useState<number>(0);

  const { data: orderss } = useGetUserOrdersQuery();

  console.log("orders:", orderss);

  const handleOpenModal = (index: number) => {
    setActiveOrder(index);
    setIsOrderOpen(true);
  };

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Заказы
      </Typography>
      <div className={s.ordersContainer}>
        {orders.map((order, index) => (
          <div className={s.orderCard} key={order.id}>
            <div className={s.orderTitle}>
              <Typography variant="body_1">
                Заказ №{" "}
                <Typography as="span" variant="body_2">
                  {order.orderNumber}
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
            <Typography
              as="button"
              variant="body_6"
              className={s.button}
              onClick={() => handleOpenModal(index)}
            >
              Подробнее
            </Typography>
          </div>
        ))}
      </div>
      <OrderPopup
        isOpen={isOrderOpen}
        setIsOpen={setIsOrderOpen}
        order={orders[activeOrder]}
      />
    </div>
  );
};
