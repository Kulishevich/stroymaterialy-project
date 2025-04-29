import React from "react";
import s from "./ProfilePage.module.scss";
import { ArrowRightIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
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
import Link from "next/link";
import {
  useGetUserOrdersQuery,
  useGetUserSettingQuery,
} from "@/api/user/user.api";
import { useGetAddressesQuery } from "@/api/addresses/address.api";
import {
  useGetFavoriteProductsQuery,
  useGetPriceOffersQuery,
} from "@/api/products/products.api";
import { useGetRegionsQuery } from "@/api/regions/regions.api";

export const ProfilePage = () => {
  const t = useTranslations("profile");
  const router = useRouter();
  const { tab } = router.query;
  const lang = router.locale || "hy";

  const { data: setting } = useGetUserSettingQuery();
  const { data: addresses } = useGetAddressesQuery({
    lang,
    perPage: 20,
  });
  const { data: orders } = useGetUserOrdersQuery({ lang });
  const { data: favorites } = useGetFavoriteProductsQuery({ lang });
  const { data: priceOffers } = useGetPriceOffersQuery({ lang });
  const { data: regions } = useGetRegionsQuery({ lang });

  const navigate = [
    {
      id: "personal_data",
      title: t("navigation.profile_personal_data"),
      value: <ProfilePersonalData setting={setting} />,
    },
    {
      id: "my_addresses",
      title: t("navigation.my_addresses"),
      value: (
        <MyAddresses
          addresses={addresses}
          name={setting?.data?.firstName || ""}
          regions={regions}
        />
      ),
    },
    {
      id: "orders",
      title: t("navigation.orders"),
      value: <Orders orders={orders} />,
    },
    {
      id: "favorites",
      title: t("navigation.favorites"),
      value: <Favorites favorites={favorites} />,
    },
    {
      id: "my_suggested_prices",
      title: t("navigation.my_suggested_prices"),
      value: <MySuggestedPrices priceOffers={priceOffers} />,
    },
    {
      id: "gift_cards",
      title: t("navigation.gift_cards"),
      value: <GiftCards />,
    },
  ];

  const activeTab = tab || navigate[0].id;

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.content}>
        <div className={s.nav}>
          {navigate.map((elem) => (
            <Typography
              as={Link}
              className={clsx(s.navItem, activeTab === elem.id && s.active)}
              key={elem.id}
              href={`${Paths.profile}?tab=${elem.id}`}
              scroll={false}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </Typography>
          ))}
        </div>
        {navigate.find((elem) => elem.id === activeTab)?.value}
      </div>
    </div>
  );
};
