import React from "react";
import s from "./Advantages.module.scss";
import { Typography } from "../../../shared/ui/typography";
import {
  ChatComments,
  DeliveryTruck,
  FastDeliveryTruck,
  OpenBox,
  StoreShopHours,
  WalletMoneyCash,
} from "@/shared/assets/icons/advantages";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("about.advantages");
  const isMobile = useIsMobile("tablet");

  const advantages = [
    {
      id: "1",
      title: t("advantage1_title"),
      value: t("advantage1_value"),
      icon: <DeliveryTruck />,
    },
    {
      id: "2",
      title: t("advantage2_title"),
      value: t("advantage2_value"),
      icon: <StoreShopHours />,
    },
    {
      id: "3",
      title: t("advantage3_title"),
      value: t("advantage3_value"),
      icon: <OpenBox />,
    },
    {
      id: "4",
      title: t("advantage4_title"),
      value: t("advantage4_value"),
      icon: <ChatComments />,
    },
    {
      id: "5",
      title: t("advantage5_title"),
      value: t("advantage5_value"),
      icon: <FastDeliveryTruck />,
    },
    {
      id: "6",
      title: t("advantage6_title"),
      value: t("advantage6_value"),
      icon: <WalletMoneyCash />,
    },
    {
      id: "7",
      title: t("advantage7_title"),
      value: t("advantage7_value"),
      icon: <ChatComments />,
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.aboutUs}>
        <Typography variant="h1" as="h1">
          {t("about_title")}
        </Typography>
        <Typography variant="body_2">{t("about_description")}</Typography>
        <Image
          src={"/images/about-us.jpg"}
          width={!isMobile ? 856 : 336}
          height={!isMobile ? 494 : 220}
          alt="about us"
        />
      </div>
      <Typography variant="h2" as="h2">
        {t("advantages_title")}
      </Typography>
      <div className={s.cardsContainer}>
        {advantages.map((advantage, index) => (
          <div className={s.card} key={advantage.id}>
            <Typography variant="h2" as="h2">
              {index + 1}
            </Typography>
            <div className={s.infoContainer}>
              <Typography variant="h3" as="h3">
                {advantage.title}
              </Typography>
              <Typography variant="body_3">{advantage.value}</Typography>
            </div>
            {advantage.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
