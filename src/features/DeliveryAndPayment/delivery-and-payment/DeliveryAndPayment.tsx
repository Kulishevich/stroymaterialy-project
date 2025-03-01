import React from "react";
import s from "./DeliveryAndPayment.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "../../../components/ui/typography";
import clsx from "clsx";
import { DeliveryAndLifting } from "../DeliveryAndLifting";
import { TermsOfService } from "../TermsOfService";
import { LiftingConditions } from "../LiftingConditions";
import { useTranslations } from "next-intl";
import { PaymentMethod } from "../PaymentMethod";
import { useRouter } from "next/router";
import { Paths } from "@/shared/enums";
import Link from "next/link";

export const DeliveryAndPayment = () => {
  const t = useTranslations("delivery_and_payment");
  const router = useRouter();
  const { tab } = router.query;
  const activeTab = tab || "delivery_and_lifting";

  const navigation = [
    {
      id: "delivery_and_lifting",
      title: t("navigation.delivery_and_lifting_payment"),
      value: <DeliveryAndLifting />,
    },
    {
      id: "payment_method",
      title: t("navigation.payment_method"),
      value: <PaymentMethod />,
    },
    {
      id: "terms_of_service",
      title: t("navigation.terms_of_service"),
      value: <TermsOfService />,
    },
    {
      id: "lifting_conditions",
      title: t("navigation.lifting_conditions"),
      value: <LiftingConditions />,
    },
  ];

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.wrapper}>
        <div className={s.navigate}>
          {navigation.map((elem) => (
            <Link
              className={clsx(s.navItem, activeTab === elem.id && s.active)}
              key={elem.id}
              href={`${Paths.deliveryAndPayment}?tab=${elem.id}`}
              scroll={false}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </Link>
          ))}
        </div>
        {navigation.find((navItem) => activeTab === navItem.id)?.value}
      </div>
    </div>
  );
};
