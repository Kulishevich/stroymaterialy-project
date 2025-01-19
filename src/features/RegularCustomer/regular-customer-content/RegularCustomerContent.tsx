import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { ArrowRightIcon } from "@/assets/icons";
import { GiftCards } from "../gift-cards";
import { InfoRegularCustomer } from "../info-regular-customer";
import s from "./RegularCustomerContent.module.scss";

const categories = [
  {
    id: "1",
    title: "Информация для постоянных клиентов",
    value: <InfoRegularCustomer />,
  },
  {
    id: "2",
    title: "Подарочные карты",
    value: <GiftCards />,
  },
];

export const RegularCustomerContent = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Постоянный клиент
      </Typography>
      <div className={s.content}>
        <div className={s.navigate}>
          {categories.map((elem) => (
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
        {categories.find((elem) => elem.id === activeCategory)?.value}
      </div>
    </div>
  );
};
