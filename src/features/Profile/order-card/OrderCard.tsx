import React, { useState } from "react";
import s from "./OrderCard.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";

export const OrderCard = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => --prev);
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
      <div className={s.counterContainer}>
        <Typography className={s.counter} as="span" variant="body_7">
          {count}
        </Typography>
        <div className={s.buttonContainer}>
          <Typography
            onClick={decrement}
            disabled={count === 0}
            as="button"
            variant="body_7"
          >
            -
          </Typography>
          <Typography onClick={increment} as="button" variant="body_7">
            +
          </Typography>
        </div>
      </div>
    </div>
  );
};
