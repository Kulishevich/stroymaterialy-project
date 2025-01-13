import React from "react";
import s from "./WorkProcess.module.scss";
import { Typography } from "../ui/typography";
import {
  ChatComments,
  FastDeliveryTruck,
  StoreShopHours,
  WalletMoneyCash,
} from "@/assets/icons/advantages";

const cards = [
  {
    id: "1",
    title: "Получение коммерческого предложения/прием заказа",
    icon: <ChatComments />,
  },
  {
    id: "2",
    title: "Оформление заказа, подтверждение",
    icon: <StoreShopHours />,
  },
  {
    id: "3",
    title: "Выставление счета/оплата",
    icon: <WalletMoneyCash />,
  },
  {
    id: "4",
    title: "Отгрузка товара/доставка",
    icon: <FastDeliveryTruck />,
  },
];

export const WorkProcess = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Наш процесс работы
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
