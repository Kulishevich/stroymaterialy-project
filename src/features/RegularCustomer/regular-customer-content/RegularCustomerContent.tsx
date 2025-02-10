import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { ArrowRightIcon } from "@/assets/icons";
import { GiftCards } from "../gift-cards";
import { InfoRegularCustomer } from "../info-regular-customer";
import s from "./RegularCustomerContent.module.scss";
import { useTranslations } from "next-intl";

export const RegularCustomerContent = () => {
  const t = useTranslations("regular_customer");
  const navigation = [
    {
      id: "1",
      title: t("navigation.info"),
      value: <InfoRegularCustomer />,
    },
    {
      id: "2",
      title: t("navigation.gift_cards"),
      value: <GiftCards />,
    },
  ];
  const [activeCategory, setActiveCategory] = useState(navigation[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.content}>
        <div className={s.navigate}>
          {navigation.map((elem) => (
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
        {navigation.find((elem) => elem.id === activeCategory)?.value}
      </div>
    </div>
  );
};
