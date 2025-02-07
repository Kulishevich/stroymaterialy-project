import React, { useState } from "react";
import s from "./DeliveryAndPayment.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "../../../components/ui/typography";
import clsx from "clsx";
import { DeliveryAndLifting } from "../DeliveryAndLifting";
import { PaymentMethod } from "../PaymentMethod";
import { TermsOfService } from "../TermsOfService";
import { LiftingConditions } from "../LiftingConditions";
import { useTranslations } from "next-intl";

export const DeliveryAndPayment = () => {
  const t = useTranslations("delivery_and_payment");
  const navigation = [
    {
      id: "1",
      title: t("navigation.delivery_and_lifting_payment"),
      value: <DeliveryAndLifting />,
    },
    {
      id: "2",
      title: t("navigation.payment_method"),
      value: <PaymentMethod />,
    },
    {
      id: "3",
      title: t("navigation.terms_of_service"),
      value: <TermsOfService />,
    },
    {
      id: "4",
      title: t("navigation.lifting_conditions"),
      value: <LiftingConditions />,
    },
  ];
  const [activeCategory, setActiveCategory] = useState(navigation[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.wrapper}>
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
        {navigation.find((navItem) => activeCategory === navItem.id)?.value}
      </div>
    </div>
  );
};
