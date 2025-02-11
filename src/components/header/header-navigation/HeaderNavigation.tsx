import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React, { useEffect } from "react";
import { SelectIcons } from "@/components/ui/select-icons";
import { AmIcon, PercentIcon, ProfileIcon, RuIcon } from "@/assets/icons";
import { Paths } from "@/shared/enums";
import { Dropdown } from "@/components/ui/dropdown";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "@/store/slices/lang/langSlice";
import clsx from "clsx";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";
import s from "./HeaderNavigation.module.scss";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("header.navigation");
  const router = useRouter();
  const lang = useSelector((state: RootState) => state.lang);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const cooperationOptions = [
    {
      value: (
        <Typography
          as={Link}
          href={Paths.forBusiness}
          variant="placeholder_big"
        >
          {t("for_business")}
        </Typography>
      ),
      id: "value1",
    },
    {
      value: (
        <Typography as={Link} href={Paths.vacancies} variant="placeholder_big">
          {t("vacancies")}
        </Typography>
      ),
      id: "value2",
    },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      router.push(router.asPath, router.asPath, { locale: savedLanguage });
    }
  }, []);

  const changeLanguage = (value: string) => {
    dispatch(changeLang(value));
    document.cookie = `locale=${value}; path=/; max-age=31536000`;
    console.log(document.cookie);
    router.push(router.asPath, router.asPath, { locale: value });
  };

  const handleProfileClick = () => {
    if (token) {
      router.push(`${Paths.profile}?tab=personal_data`);
    } else {
      dispatch(toggleLoginModal());
    }
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
            {t("main")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.deliveryAndPayment}
            className={clsx(
              s.navLink,
              router.pathname === Paths.deliveryAndPayment && s.active
            )}
          >
            {t("delivery_and_payment")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.regularСustomer}
            className={clsx(
              s.navLink,
              router.pathname === Paths.regularСustomer && s.active
            )}
          >
            {t("regular_customer")}
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
            {t("shares")}
          </Typography>
          <Dropdown
            placeholder={t("cooperation")}
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
            {t("about_us")}
          </Typography>
          <Typography
            as={Link}
            href={Paths.contacts}
            className={clsx(
              s.navLink,
              router.pathname === Paths.contacts && s.active
            )}
          >
            {t("contacts")}
          </Typography>
        </nav>
        <SelectIcons
          options={headerOptions}
          className={s.selectHeader}
          value={String(lang)}
          placeHolder={
            headerOptions.find((elem) => elem.value === String(lang))?.icon
          }
          onValueChange={(value) => changeLanguage(value)}
        />
        <Typography
          onClick={handleProfileClick}
          className={s.profileButton}
          as={"button"}
          variant="body_3"
        >
          <ProfileIcon width={20} height={20} />
          {t("personal_account")}
        </Typography>
      </div>
    </header>
  );
};
