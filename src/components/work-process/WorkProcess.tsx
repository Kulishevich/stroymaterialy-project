import React from "react";
import s from "./WorkProcess.module.scss";
import { Typography } from "../ui/typography";
import {
  ChatComments,
  FastDeliveryTruck,
  StoreShopHours,
  WalletMoneyCash,
} from "@/assets/icons/advantages";
import { useTranslations } from "next-intl";

type WorkProcessCard = {
  id: string;
  title: string;
};

export const WorkProcess = () => {
  const t = useTranslations("cooperation.for_business.work_process");

  const icons = [
    <ChatComments key={1} />,
    <StoreShopHours key={2} />,
    <WalletMoneyCash key={3} />,
    <FastDeliveryTruck key={4} />,
  ];

  const cards: WorkProcessCard[] = t.raw("cards"); // Получаем массив из JSON

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      <div className={s.cardsContainer}>
        {cards.map((card, index) => (
          <div className={s.card} key={card.id}>
            <Typography variant="h2" as="h2">
              {index + 1}
            </Typography>
            <Typography variant="h3" as="h3">
              {card.title}
            </Typography>
            {icons[index]}
          </div>
        ))}
      </div>
    </div>
  );
};
