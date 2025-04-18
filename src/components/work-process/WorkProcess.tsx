import React from "react";
import s from "./WorkProcess.module.scss";
import { Typography } from "../../shared/ui/typography";
import {
  ChatComments,
  FastDeliveryTruck,
  StoreShopHours,
  WalletMoneyCash,
} from "@/shared/assets/icons/advantages";
import { useTranslations } from "next-intl";

export const WorkProcess = () => {
  const t = useTranslations("cooperation.for_business.work_process");

  const cards = [
    {
      id: 1,
      title: t("step_1"),
      icon: <ChatComments />,
    },
    {
      id: 2,
      title: t("step_2"),
      icon: <StoreShopHours />,
    },
    {
      id: 3,
      title: t("step_3"),
      icon: <WalletMoneyCash />,
    },
    {
      id: 4,
      title: t("step_4"),
      icon: <FastDeliveryTruck />,
    },
  ];

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
            {card.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
