import React, { useState } from "react";
import { Typography } from "../ui/typography";
import s from "./RegularCustomer.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import clsx from "clsx";
import { InfoRegularCustomer } from "./info-regular-customer";
import { GiftCards } from "./gift-cards";

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

export const RegularCustomer = () => {
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
