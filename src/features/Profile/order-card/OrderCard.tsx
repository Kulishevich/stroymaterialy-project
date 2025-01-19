import React from "react";
import s from "./OrderCard.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/counter";

export const OrderCard = () => {
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
      <Counter size="s" />
    </div>
  );
};
