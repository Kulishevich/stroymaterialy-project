import React, { useState } from "react";
import s from "./ProfilePage.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { ProfilePersonalData } from "../profile-personal-data";
import { MyAddresses } from "../my-addresses";
import { Orders } from "../orders";
import { Favorites } from "../favorites";
import { MySuggestedPrices } from "../my-suggested-prices";
import { GiftCards } from "../gift-cards";

const navigate = [
  {
    id: "1",
    title: "Персональные данные",
    value: <ProfilePersonalData />,
  },
  {
    id: "2",
    title: "Мои адреса",
    value: <MyAddresses />,
  },
  {
    id: "3",
    title: "Заказы",
    value: <Orders />,
  },
  {
    id: "4",
    title: "Избранные",
    value: <Favorites />,
  },
  {
    id: "5",
    title: "Мои предложенные цены",
    value: <MySuggestedPrices />,
  },
  {
    id: "6",
    title: "Подарочные карты",
    value: <GiftCards />,
  },
];

export const ProfilePage = () => {
  const [activeCategory, setActiveCategory] = useState(navigate[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Личный кабинет
      </Typography>
      <div className={s.content}>
        <div className={s.nav}>
          {navigate.map((elem) => (
            <div
              className={clsx(
                s.navItem,
                activeCategory === elem.id && s.active
              )}
              key={elem.id}
              onClick={() => setActiveCategory(elem.id)}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </div>
          ))}
        </div>
        {navigate.find((elem) => elem.id === activeCategory)?.value}
      </div>
    </div>
  );
};
