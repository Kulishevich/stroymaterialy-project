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
import { useTranslations } from "next-intl";

export const ProfilePage = () => {
  const t = useTranslations("profile");
  const router = useRouter();
  const { tab } = router.query;

  const navigate = [
    {
      id: "personal_data",
      title: t("navigation.profile_personal_data"),
      value: <ProfilePersonalData />,
    },
    {
      id: "my_addresses",
      title: t("navigation.my_addresses"),
      value: <MyAddresses />,
    },
    {
      id: "orders",
      title: t("navigation.orders"),
      value: <Orders />,
    },
    {
      id: "favorites",
      title: t("navigation.favorites"),
      value: <Favorites />,
    },
    {
      id: "my_suggested_prices",
      title: t("navigation.my_suggested_prices"),
      value: <MySuggestedPrices />,
    },
    {
      id: "gift_cards",
      title: t("navigation.gift_cards"),
      value: <GiftCards />,
    },
  ];

  const handleNavigateTab = (id: string) => {
    router.push(`${Paths.profile}?tab=${id}`, undefined, { scroll: false });
  };

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
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
