import React from "react";
import s from "./ReasonsCards.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const ReasonsCards = () => {
  const t = useTranslations("cooperation.vacancies.reasons_cards");
  const isMobile = useIsMobile("tablet");

  const cards = [
    {
      id: "1",
      title: t("cards.card1.title"),
      value: t("cards.card1.value"),
      image: "/images/for-business/vacancie-card1.jpg",
    },
    {
      id: "2",
      title: t("cards.card2.title"),
      value: t("cards.card2.value"),
      image: "/images/for-business/vacancie-card2.jpg",
    },
    {
      id: "3",
      title: t("cards.card3.title"),
      value: t("cards.card3.value"),
      image: "/images/for-business/vacancie-card3.jpg",
    },
  ];

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      <div className={s.cardsContainer}>
        {cards.map((card) => (
          <div className={s.card} key={card.id}>
            <Image
              src={card.image}
              width={!isMobile ? 281 : 336}
              height={!isMobile ? 313 : 180}
              alt="vacancie card"
              className={s.image}
            />
            <div className={s.content}>
              <Typography variant="h3" as="h3">
                {card.title}
              </Typography>
              <Typography variant="body_3">{card.value}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
