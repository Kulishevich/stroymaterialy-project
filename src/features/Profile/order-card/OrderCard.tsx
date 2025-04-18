import React, { useState } from "react";
import s from "./OrderCard.module.scss";
import Image from "next/image";
import { Typography } from "@/shared/ui/typography";
import { Counter } from "@/components/counter";
import { OrderItem } from "@/api/orders/orders.types";

type OrderCardProps = {
  orderItem: OrderItem;
};

export const OrderCard = ({ orderItem }: OrderCardProps) => {
  const [count, setCount] = useState(Number(orderItem.count));

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={s.container}>
      <Image
        src={orderItem.product.images.main.src}
        width={120}
        height={120}
        alt="order image"
        className={s.image}
      />
      <Typography variant="body_7">{orderItem.total}</Typography>
      <Counter
        size="s"
        countCurrent={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};
