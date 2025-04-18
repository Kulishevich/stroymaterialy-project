import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import React from "react";
import { SelectLanguage } from "@/shared/ui/select-icons";
import { PercentIcon, ProfileIcon } from "@/shared/assets/icons";
import { Paths } from "@/shared/enums";
import { Dropdown } from "@/shared/ui/dropdown";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";
import { useTranslations } from "next-intl";
import s from "./HeaderNavigation.module.scss";
import { useGetUserSettingQuery } from "@/api/user/user.api";

export const HeaderNavigation = () => {
  const t = useTranslations("header.navigation");
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const { data } = useGetUserSettingQuery(undefined, { skip: !token });

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

  const handleProfileClick = () => {
    if (token) {
      router.push(`${Paths.profile}`);
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
        <SelectLanguage className={s.selectHeader} />
        <Typography
          onClick={handleProfileClick}
          className={s.profileButton}
          as={"button"}
          variant="body_3"
        >
          <ProfileIcon width={20} height={20} />
          {token && data?.data?.lastName && data?.data?.firstName[0]
            ? `${data?.data?.lastName} ${data?.data?.firstName[0]}`
            : t("personal_account")}
        </Typography>
      </div>
    </header>
  );
};
