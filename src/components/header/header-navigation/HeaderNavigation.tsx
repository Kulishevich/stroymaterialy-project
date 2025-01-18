import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React, { useState } from "react";
import { SelectIcons } from "@/components/ui/select-icons";
import { PercentIcon, ProfileIcon } from "@/assets/icons";
import { FlagRussia } from "@/assets/icons/flag-russia";
import s from "./HeaderNavigation.module.scss";
import clsx from "clsx";
import { Paths } from "@/shared/enums";
import { LoginFormPopup } from "@/components/login-form-popup";
import { Dropdown } from "@/components/ui/dropdown";

const headerOptions = [
  {
    icon: <FlagRussia />,
    value: "Russia1",
  },
  {
    icon: <FlagRussia />,
    value: "Russia2",
  },
];

const cooperationOptions = [
  {
    value: (
      <Typography as={Link} href={Paths.forBusiness} variant="placeholder_big">
        Для бизнеса
      </Typography>
    ),
    id: "value1",
  },
  {
    value: (
      <Typography as={Link} href={Paths.vacancies} variant="placeholder_big">
        Вакансии
      </Typography>
    ),
    id: "value2",
  },
];
export const HeaderNavigation = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navigate}>
          <Typography as={Link} href={"/"} className={s.navLink}>
            Главная
          </Typography>
          <Typography
            as={Link}
            href={Paths.deliveryAndPayment}
            className={s.navLink}
          >
            Доставка и оплата
          </Typography>
          <Typography
            as={Link}
            href={Paths.regularСustomer}
            className={s.navLink}
          >
            Постоянный клиент
          </Typography>
          <Typography
            as={Link}
            href={Paths.shares}
            className={clsx(s.navLink, s.shares)}
          >
            <PercentIcon />
            Акции
          </Typography>
          <Dropdown
            placeholder="Сотрудничество"
            items={cooperationOptions}
            className={s.navLink}
          />
          <Typography as={Link} href={Paths.about} className={s.navLink}>
            О нас
          </Typography>
          <Typography as={Link} href={Paths.contacts} className={s.navLink}>
            Контакты
          </Typography>
        </nav>
        <SelectIcons
          options={headerOptions}
          className={s.selectHeader}
          placeHolder={headerOptions[0].icon}
        />
        <Typography
          onClick={() => setIsLoginFormOpen(true)}
          className={s.profileButton}
          as={"button"}
          variant="body_3"
        >
          <ProfileIcon />
          Личный кабинет
        </Typography>
        <LoginFormPopup
          isOpen={isLoginFormOpen}
          setIsOpen={setIsLoginFormOpen}
        />
      </div>
    </header>
  );
};
