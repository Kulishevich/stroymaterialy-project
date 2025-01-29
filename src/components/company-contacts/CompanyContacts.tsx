import React from "react";
import s from "./CompanyContacts.module.scss";
import { Typography } from "../ui/typography";
import {
  AddressLocationIcon,
  LetterOpenedIcon,
  PhoneIcon,
  UsersGroupIcon,
} from "@/assets/icons";
import { SocialNetworks } from "../social-networks";
import { YandexMap } from "../yandexMap";
import clsx from "clsx";

const cards = [
  {
    id: "1",
    title: "Адрес компании",
    value: "ул. Наири Заряна 22а, Ереван 0051",
    icon: <AddressLocationIcon width={48} height={48} />,
  },
  {
    id: "2",
    title: "Телефон",
    value: "+374 (33) 144-000",
    icon: <PhoneIcon width={48} height={48} />,
  },
  {
    id: "3",
    title: "Электронная почта",
    value: "Info@domix.am",
    icon: <LetterOpenedIcon width={48} height={48} />,
  },
  {
    id: "4",
    title: "Социальные сети",
    value: <SocialNetworks />,
    icon: <UsersGroupIcon width={48} height={48} />,
  },
];

type CompanyContactsProps = {
  variant?: "primary" | "secondary";
};

export const CompanyContacts = ({
  variant = "primary",
}: CompanyContactsProps) => {
  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        Контакты компании
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
