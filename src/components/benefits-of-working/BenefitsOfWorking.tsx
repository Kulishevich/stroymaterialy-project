import React from "react";
import s from "./BenefitsOfWorking.module.scss";
import { Typography } from "../../shared/ui/typography";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

type Card = {
  id: string;
  title: string;
  image: string;
  values: string[];
};

export const BenefitsOfWorking = () => {
  const t = useTranslations("cooperation.for_business.benefits_of_working");
  const isMobile = useIsMobile("tablet");

  const cards = [
    {
      id: "1",
      title: t("service.title"),
      image: "/images/for-business/image1.jpg",
      values: [
        t("service.value_1"),
        t("service.value_2"),
        t("service.value_3"),
        t("service.value_4"),
      ],
    },
    {
      id: "2",
      title: t("pricing.title"),
      image: "/images/for-business/image2.jpg",
      values: [
        t("pricing.value_1"),
        t("pricing.value_2"),
        t("pricing.value_3"),
        t("pricing.value_4"),
        t("pricing.value_5"),
        t("pricing.value_6"),
      ],
    },
    {
      id: "3",
      title: t("approach.title"),
      image: "/images/for-business/image3.jpg",
      values: [
        t("approach.value_1"),
        t("approach.value_2"),
        t("approach.value_3"),
        t("approach.value_4"),
      ],
    },
    {
      id: "4",
      title: t("advantages.title"),
      image: "/images/for-business/image4.jpg",
      values: [
        t("advantages.value_1"),
        t("advantages.value_2"),
        t("advantages.value_3"),
        t("advantages.value_4"),
        t("advantages.value_5"),
        t("advantages.value_6"),
      ],
    },
  ];

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      <div className={s.cards}>
        {cards.map((card: Card) => (
          <div className={s.card} key={card.id}>
            <Image
              src={card.image}
              alt="image"
              className={s.image}
              width={!isMobile ? 281 : 336}
              height={!isMobile ? 399 : 180}
              unoptimized
            />
            <div className={s.content}>
              <Typography variant="h3" as="h3">
                {card.title}
              </Typography>
              <ul>
                {card.values.map((value, index) => (
                  <Typography
                    variant="body_3"
                    as="li"
                    key={`${card.id}-${index}`}
                  >
                    {value}
                  </Typography>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
