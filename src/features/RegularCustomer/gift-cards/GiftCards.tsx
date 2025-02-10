import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import s from "./GiftCards.module.scss";
import clsx from "clsx";
import { ActivateCard } from "./activate-card";
import { CardForm } from "./card-form";
import { useTranslations } from "next-intl";

export const GiftCards = () => {
  const t = useTranslations("regular_customer.gift_card");
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
  const [cardState, setCardState] = useState<string>(card[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <ul>
        <Typography variant="body_3" as="li">
          {t("benefits.versatile_gift")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.online_use_only")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.validity")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.no_refund")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.remaining_balance")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.additional_payment")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("benefits.purchase_limits")}
        </Typography>
      </ul>

      <div className={s.nav}>
        {card.map((elem) => (
          <Typography
            variant="h3"
            as="h3"
            key={elem.id}
            className={clsx(cardState === elem.id && s.active)}
            onClick={() => setCardState(elem.id)}
          >
            {t(`actions.${elem.id === "1" ? "order" : "activate"}`)}
          </Typography>
        ))}
      </div>
      {card.find((elem) => elem.id === cardState)?.value}
    </div>
  );
};
