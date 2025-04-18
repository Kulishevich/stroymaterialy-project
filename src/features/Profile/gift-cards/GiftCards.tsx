import React from "react";
import s from "./GiftCards.module.scss";
import { Typography } from "@/shared/ui/typography";
import { useGetUserGiftsQuery } from "@/api/user/user.api";
import { useTranslations } from "next-intl";

export const GiftCards = () => {
  const t = useTranslations("profile.gift_cards");
  const { data } = useGetUserGiftsQuery();
  console.log(data);
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
    </div>
  );
};
