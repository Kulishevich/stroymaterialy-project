import React from "react";
import s from "./Advantages.module.scss";
import { Typography } from "../../../components/ui/typography";
import {
  ChatComments,
  DeliveryTruck,
  FastDeliveryTruck,
  OpenBox,
  StoreShopHours,
  WalletMoneyCash,
} from "@/assets/icons/advantages";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

const advantages = [
  {
    id: "1",
    title: "Бесплатная доставка",
    value: "Мы доставим совершенно бесплатно на территории Еревана все товары",
    icon: <DeliveryTruck />,
  },
  {
    id: "2",
    title: "Собственный автопарк",
    value:
      "Автомобили любой грузоподъемности Так же в наличии автомобили грузоподьемностью до 800кг,для которых разрешено вьезд  в центр города ",
    icon: <StoreShopHours />,
  },
  {
    id: "3",
    title: "Собственный склад",
    value:
      "Мы обеспечиваем правильное хранение всех товаров, а представленные на сайте позиции всегда имеются в наличии",
    icon: <OpenBox />,
  },
  {
    id: "4",
    title: "Предоставление квалифицированных грузчиков ",
    value: "Мы поможем безопасно поднять ваши товары на любой этаж",
    icon: <ChatComments />,
  },
  {
    id: "5",
    title: "Разные способы доставки",
    value: (
      <>
        - самовывоз
        <br />
        - доставка автомобилями разной грузоподъемности
        <br />
        - курьерская доставка
        <br />- доставка в регионы через компанию Айпост
      </>
    ),
    icon: <FastDeliveryTruck />,
  },
  {
    id: "6",
    title: "Цены",
    value: "Низкие цены, чем в любых строительных магазинах",
    icon: <WalletMoneyCash />,
  },
  {
    id: "7",
    title: "Консультация специалистов",
    value:
      "Наши специалисты помогут вам выбрать нужный вам товар ,а так же оптимизируют ваши расходы по приобретению",
    icon: <ChatComments />,
  },
];

export const Advantages = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <div className={s.aboutUs}>
        <Typography variant="h1" as="h1">
          О нас
        </Typography>
        <Typography variant="body_2">
          Domix-молодая команда с амбициям и с высоким потенциалом,
          специализирующаяся на продаже строительных материалов для внутренней
          и внешней отделки дома или квартиры, которая поможет вам благоустроить
          свое жизненное пространство и построить свой дом мечты.
        </Typography>
        <Image
          src={"/images/about-us.jpg"}
          width={!isMobile ? 856 : 336}
          height={!isMobile ? 494 : 220}
          alt="about us"
        />
      </div>
      <Typography variant="h2" as="h2">
        Наши преимущества
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
