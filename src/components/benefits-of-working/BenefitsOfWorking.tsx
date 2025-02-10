import React from "react";
import s from "./BenefitsOfWorking.module.scss";
import { Typography } from "../ui/typography";
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

  const cards = t.raw("cards");

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
