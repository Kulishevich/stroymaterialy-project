import React from "react";
import s from "./GiftCards.module.scss";
import { Typography } from "@/components/ui/typography";
import { useGetUserGiftsQuery } from "@/api/user/user.api";

export const GiftCards = () => {
  const { data } = useGetUserGiftsQuery();
  console.log(data);
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Подарочные карты
      </Typography>
    </div>
  );
};
