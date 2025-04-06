import React from "react";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { ArrowRightIcon } from "@/shared/assets/icons";
import { GiftCards } from "../gift-cards";
import { InfoRegularCustomer } from "../info-regular-customer";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Paths } from "@/shared/enums";
import Link from "next/link";
import s from "./RegularCustomerContent.module.scss";

export const RegularCustomerContent = () => {
  const t = useTranslations("regular_customer");
  const router = useRouter();
  const { tab } = router.query;
  const activeTab = tab || "info_regular_customer";

  const navigation = [
    {
      id: "info_regular_customer",
      title: t("navigation.info"),
      value: <InfoRegularCustomer />,
    },
    {
      id: "gift_cards",
      title: t("navigation.gift_cards"),
      value: <GiftCards />,
    },
  ];

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.content}>
        <div className={s.navigate}>
          {navigation.map((elem) => (
            <Link
              className={clsx(s.navItem, activeTab === elem.id && s.active)}
              key={elem.id}
              href={`${Paths.regularСustomer}?tab=${elem.id}`}
              scroll={false}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </Link>
          ))}
        </div>
        {navigation.find((elem) => elem.id === activeTab)?.value}
      </div>
    </div>
  );
};
