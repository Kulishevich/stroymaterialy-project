import React, { useState } from "react";
import s from "./DeliveryAndPayment.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "../../../components/ui/typography";
import clsx from "clsx";
import { DeliveryAndLifting } from "../DeliveryAndLifting";
import { PaymentMethod } from "../PaymentMethod";
import { TermsOfService } from "../TermsOfService";
import { LiftingConditions } from "../LiftingConditions";

const categories = [
  {
    id: "1",
    title: "Стоимость доставки и подъёма",
  },
  {
    id: "2",
    title: "Способы оплаты",
  },
  {
    id: "3",
    title: "Условия предоставления услуг",
  },
  {
    id: "4",
    title: "Условия подъёма",
  },
];

export const DeliveryAndPayment = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Доставка и оплата
      </Typography>
      <div className={s.wrapper}>
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
        {activeCategory === "1" && <DeliveryAndLifting />}
        {activeCategory === "2" && <PaymentMethod />}
        {activeCategory === "3" && <TermsOfService />}
        {activeCategory === "4" && <LiftingConditions />}
      </div>
    </div>
  );
};
