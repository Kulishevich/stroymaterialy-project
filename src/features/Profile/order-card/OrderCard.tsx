import React, { useState } from "react";
import s from "./OrderCard.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/counter";

export const OrderCard = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={s.container}>
      <Image
        src={"/images/profile-card.png"}
        width={120}
        height={120}
        alt="order image"
        className={s.image}
      />
      <Typography variant="body_7">500,00 AMD / шт</Typography>
      <Counter
        size="s"
        countCurrent={count}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};
