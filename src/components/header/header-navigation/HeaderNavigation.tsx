import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { SelectIcons } from "@/components/ui/select-icons";
import { PercentIcon, ProfileIcon } from "@/assets/icons";
import { FlagRussia } from "@/assets/icons/flag-russia";
import s from "./HeaderNavigation.module.scss";
import clsx from "clsx";
import { Paths } from "@/shared/enums";

export const HeaderNavigation = () => {
  const headerOption = [
    {
      icon: <FlagRussia />,
      value: "Russia1",
    },
    {
      icon: <FlagRussia />,
      value: "Russia2",
    },
  ];

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
          <Typography as={Link} href={Paths.cooperation} className={s.navLink}>
            Сотрудничество
          </Typography>
          <Typography as={Link} href={Paths.about} className={s.navLink}>
            О нас
          </Typography>
          <Typography as={Link} href={Paths.contacts} className={s.navLink}>
            Контакты
          </Typography>
        </nav>
        <SelectIcons options={headerOption} className={s.selectHeader} />
        <Typography
          href={Paths.profile}
          className={s.profileLink}
          as={Link}
          variant="body_3"
        >
          <ProfileIcon />
          Личный кабинет
        </Typography>
      </div>
    </header>
  );
};
