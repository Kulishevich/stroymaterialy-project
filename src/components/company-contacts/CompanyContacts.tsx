import React from "react";
import s from "./CompanyContacts.module.scss";
import { Typography } from "../ui/typography";
import {
  AddressLocationIcon,
  LetterOpenedIcon,
  PhoneIcon,
  UsersGroupIcon,
} from "@/shared/assets/icons";
import { SocialNetworks } from "../social-networks";
import { YandexMap } from "../yandexMap";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type CompanyContactsProps = {
  variant?: "primary" | "secondary";
};

export const CompanyContacts = ({
  variant = "primary",
}: CompanyContactsProps) => {
  const t = useTranslations("home.contacts");

  const cards = [
    {
      id: "1",
      title: t("address"),
      value: t("address_content"),
      icon: <AddressLocationIcon width={48} height={48} />,
    },
    {
      id: "2",
      title: t("phone"),
      value: "+374 (33) 144-000",
      icon: <PhoneIcon width={48} height={48} />,
    },
    {
      id: "3",
      title: t("email"),
      value: "Info@domix.am",
      icon: <LetterOpenedIcon width={48} height={48} />,
    },
    {
      id: "4",
      title: t("social_media"),
      value: <SocialNetworks />,
      icon: <UsersGroupIcon width={48} height={48} />,
    },
  ];

  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      <div className={s[variant]}>
        <YandexMap className={s.map} />
        <div
          className={clsx(
            s.cardsContainer,
            variant === "secondary" && s.inline
          )}
        >
          {cards.map((elem) => (
            <div className={s.card} key={elem.id}>
              {elem.icon}
              <Typography variant="body_3">{elem.title}</Typography>
              <Typography variant="h3" as="h3">
                {elem.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
