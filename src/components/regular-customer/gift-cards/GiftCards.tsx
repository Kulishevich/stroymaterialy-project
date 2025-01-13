import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import s from "./GiftCards.module.scss";
import clsx from "clsx";
import { ActivateCard } from "./activate-card";
import { CardForm } from "./card-form";

const card = [
  {
    id: "1",
    title: "Заказать карту",
    value: <CardForm />,
  },
  {
    id: "2",
    title: "Активировать карту",
    value: <ActivateCard />,
  },
];

export const GiftCards = () => {
  const [cardState, setCardState] = useState<string>(card[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Подарочная карта Domix
      </Typography>
      <ul>
        <Typography variant="body_3" as="li">
          Это будет отличный универсальный подарок для тех, кто строит,
          планирует или делает ремонт!
        </Typography>
        <Typography variant="body_3" as="li">
          Подарочная карта может быть использована только для приобретения
          товаров на сайте shinmag.am.
        </Typography>
        <Typography variant="body_3" as="li">
          Карта действительна в течении 1 (одного) года с момента активации в
          личном кабинете сайта shinmag.am .По истечению данного срока
          Подарочная карта становится недействительной, положительный баланс по
          карте аннулируется.
        </Typography>
        <Typography variant="body_3" as="li">
          Карта обмену и возврату не подлежит, уплаченные за нее денежные
          средства не возвращаются. При утере или краже карты, денежные
          средства, находящиеся на ее балансе, не восстанавливаются.
        </Typography>
        <Typography variant="body_3" as="li">
          В случае, если стоимость выбранного товара из ассортимента магазина
          менее номинала Подарочной карты, остаток денежных средств остается на
          карте для дальнейших покупок.
        </Typography>
        <Typography variant="body_3" as="li">
          В случае, если стоимость выбранного товара из ассортимента магазина
          больше номинала Подарочной карты, то разница выплачивается
          предьявителем карты.
        </Typography>
        <Typography variant="body_3" as="li">
          Приобрести подарочную карту можно номиналом от 10000-2000000 драмов на
          нашем сайте.
        </Typography>
      </ul>
      <div className={s.card}>
        <div className={s.nav}>
          {card.map((elem) => (
            <Typography
              variant="h3"
              as="h3"
              key={elem.id}
              className={clsx(cardState === elem.id && s.active)}
              onClick={() => setCardState(elem.id)}
            >
              {elem.title}
            </Typography>
          ))}
        </div>
        {card.find((elem) => elem.id === cardState)?.value}
      </div>
    </div>
  );
};
