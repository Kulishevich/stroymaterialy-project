import React from "react";
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
import { useRouter } from "next/router";
import { Paths } from "@/shared/enums";

const navigate = [
  {
    id: "personal_data",
    title: "Персональные данные",
    value: <ProfilePersonalData />,
  },
  {
    id: "my_addresses",
    title: "Мои адреса",
    value: <MyAddresses />,
  },
  {
    id: "orders",
    title: "Заказы",
    value: <Orders />,
  },
  {
    id: "favorites",
    title: "Избранные",
    value: <Favorites />,
  },
  {
    id: "my_suggested_prices",
    title: "Мои предложенные цены",
    value: <MySuggestedPrices />,
  },
  {
    id: "gift_cards",
    title: "Подарочные карты",
    value: <GiftCards />,
  },
];

export const ProfilePage = () => {
  const router = useRouter();
  const { tab } = router.query;

  const handleNavigateTab = (id: string) => {
    router.push(`${Paths.profile}?tab=${id}`, undefined, { scroll: false });
  };

  console.log(tab);
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Личный кабинет
      </Typography>
      <div className={s.content}>
        <div className={s.nav}>
          {navigate.map((elem) => (
            <Typography
              as="button"
              className={clsx(s.navItem, tab === elem.id && s.active)}
              key={elem.id}
              onClick={() => handleNavigateTab(elem.id)}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </Typography>
          ))}
        </div>
        {navigate.find((elem) => elem.id === tab)?.value}
      </div>
    </div>
  );
};
