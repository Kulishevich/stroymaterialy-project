import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React, { useState } from "react";
import { SelectIcons } from "@/components/ui/select-icons";
import { AmIcon, PercentIcon, ProfileIcon, RuIcon } from "@/assets/icons";
import s from "./HeaderNavigation.module.scss";
import { Paths } from "@/shared/enums";
import { LoginFormPopup } from "@/components/login-form-popup";
import { Dropdown } from "@/components/ui/dropdown";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "@/store/slices/lang/langSlice";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { RootState } from "@/store/store";
import { showToast } from "@/components/ui/toast";

const headerOptions = [
  {
    icon: <AmIcon />,
    value: "hy",
  },
  {
    icon: <RuIcon />,
    value: "ru",
  },
];

export const HeaderNavigation = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const router = useRouter();
  const [lang, langs] = useSelector((state: RootState) => state.lang);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  console.log(lang, langs);

  const cooperationOptions = [
    {
      value: (
        <Typography
          as={Link}
          href={Paths.forBusiness}
          variant="placeholder_big"
        >
          {t("header.navigation.for_business")}
        </Typography>
      ),
      id: "value1",
    },
    {
      value: (
        <Typography as={Link} href={Paths.vacancies} variant="placeholder_big">
          {t("header.navigation.vacancies")}
        </Typography>
      ),
      id: "value2",
    },
  ];

  const changeLanguage = (value: string) => {
    dispatch(changeLang(value));
    i18n.changeLanguage(value);
    showToast({
      message: "Язык сменён",
      variant: "success",
      description: "Скоро с вами свяжется наш менеджер.",
    });
  };

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navigate}>
          <Typography
            as={Link}
            href={Paths.home}
            className={clsx(
              s.navLink,
              router.pathname === Paths.home && s.active
            )}
          >
            {t("header.navigation.main")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.deliveryAndPayment}
            className={clsx(
              s.navLink,
              router.pathname === Paths.deliveryAndPayment && s.active
            )}
          >
            {t("header.navigation.delivery_and_payment")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.regularСustomer}
            className={clsx(
              s.navLink,
              router.pathname === Paths.regularСustomer && s.active
            )}
          >
            {t("header.navigation.regular_customer")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.shares}
            className={clsx(
              s.navLink,
              s.shares,
              router.pathname === Paths.shares && s.active
            )}
          >
            <PercentIcon />
            {t("header.navigation.shares")}
          </Typography>
          <Dropdown
            placeholder="Сотрудничество"
            items={cooperationOptions}
            className={s.navLink}
          />
          <Typography
            as={Link}
            href={Paths.about}
            className={clsx(
              s.navLink,
              router.pathname === Paths.about && s.active
            )}
          >
            {t("header.navigation.about_us")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.contacts}
            className={clsx(
              s.navLink,
              router.pathname === Paths.contacts && s.active
            )}
          >
            {t("header.navigation.contacts")}
          </Typography>
        </nav>
        <SelectIcons
          options={headerOptions}
          className={s.selectHeader}
          placeHolder={headerOptions[0].icon}
          onValueChange={(value) => changeLanguage(value)}
        />
        <Typography
          onClick={() => setIsLoginFormOpen(true)}
          className={s.profileButton}
          as={"button"}
          variant="body_3"
        >
          <ProfileIcon />
          {t("header.navigation.personal_account")}
        </Typography>
        <LoginFormPopup
          isOpen={isLoginFormOpen}
          setIsOpen={setIsLoginFormOpen}
        />
      </div>
    </header>
  );
};
