import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { SelectIcons } from "@/components/ui/select-icons";
import { AmIcon, PercentIcon, ProfileIcon, RuIcon } from "@/assets/icons";
import { Paths } from "@/shared/enums";
import { Dropdown } from "@/components/ui/dropdown";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "@/store/slices/lang/langSlice";
import clsx from "clsx";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal-slice/authModalSlice";
import s from "./HeaderNavigation.module.scss";

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
  const router = useRouter();
  // const lang = useSelector((state: RootState) => state.lang);
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
          {/* {t("header.navigation.for_business")} */}
          Для бизнеса
        </Typography>
      ),
      id: "value1",
    },
    {
      value: (
        <Typography as={Link} href={Paths.vacancies} variant="placeholder_big">
          {/* {t("header.navigation.vacancies")} */}
          Вакансии
        </Typography>
      ),
      id: "value2",
    },
  ];

  const changeLanguage = (value: string) => {
    console.log(value); // Проверяем, что передается правильное значение
    dispatch(changeLang(value));
    // i18n.changeLanguage("ru");
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
            Главная
            {/* {t("header.navigation.main")} */}
          </Typography>
          <Typography
            as={Link}
            href={Paths.deliveryAndPayment}
            className={clsx(
              s.navLink,
              router.pathname === Paths.deliveryAndPayment && s.active
            )}
          >
            Доставка и оплата
            {/* {t("header.navigation.delivery_and_payment")} */}
          </Typography>
          <Typography
            as={Link}
            href={Paths.regularСustomer}
            className={clsx(
              s.navLink,
              router.pathname === Paths.regularСustomer && s.active
            )}
          >
            Постоянный покупатель
            {/* {t("header.navigation.regular_customer")} */}
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
            Акции
            {/* {t("header.navigation.shares")} */}
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
            О нас
            {/* {t("header.navigation.about_us")} */}
          </Typography>
          <Typography
            as={Link}
            href={Paths.contacts}
            className={clsx(
              s.navLink,
              router.pathname === Paths.contacts && s.active
            )}
          >
            Контакты
            {/* {t("header.navigation.contacts")} */}
          </Typography>
        </nav>
        <SelectIcons
          options={headerOptions}
          className={s.selectHeader}
          placeHolder={headerOptions[0].icon}
          onValueChange={(value) => changeLanguage(value)}
        />
        <Typography
          onClick={handleProfileClick}
          className={s.profileButton}
          as={"button"}
          variant="body_3"
        >
          <ProfileIcon width={20} height={20} />
          Личный кабинет
          {/* {t("header.navigation.personal_account")} */}
        </Typography>
      </div>
    </header>
  );
};
