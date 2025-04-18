import React, { useEffect } from "react";
import { Logo } from "@/shared/assets/icons/logo";
import { SocialNetworks } from "../social-networks";
import { Typography } from "../../shared/ui/typography";
import Link from "next/link";
import {
  IdramIcon,
  MasterCardIcon,
  PercentIcon,
  VisaIcon,
} from "@/shared/assets/icons";
import Image from "next/image";
import { Paths } from "@/shared/enums";
import { useGetCategoriesQuery } from "@/api/categories/categories.api";
import { useTranslations } from "next-intl";
import s from "./Footer.module.scss";
import Accordion from "../accordion/Accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Footer = () => {
  const lang = useSelector((state: RootState) => state.lang);
  const t = useTranslations("footer");
  const { data: categories, refetch } = useGetCategoriesQuery();

  useEffect(() => {
    refetch();
  }, [lang, refetch]);

  return (
    <div className={s.wrapper}>
      <div className={s.containerMain}>
        <div className={s.contentMain}>
          <div className={s.contacts}>
            <Logo />
            <SocialNetworks />
            <Typography as={Link} href="mailto:info@domix.am">
              Email: Info@domix.am
            </Typography>
          </div>
          <div className={s.categoryes}>
            <Typography variant="h4" as="h4">
              {t("categories_title")}
            </Typography>
            <div className={s.categoryesContainer}>
              {categories?.data.map((category) => (
                <Typography
                  as={Link}
                  href={`/${
                    category.subcategoriesCount !== 0 ? "category" : "products"
                  }/${category.id}`}
                  variant="body_3"
                  key={category.id}
                >
                  {category.name}
                </Typography>
              ))}
            </div>
          </div>
          <div className={s.navigate}>
            <Typography variant="h4" as="h4">
              {t("company_title")}
            </Typography>
            <nav className={s.navigateContainer}>
              <Typography as={Link} href={Paths.home} variant="body_3">
                {t("main_page")}
              </Typography>
              <Typography
                as={Link}
                href={Paths.deliveryAndPayment}
                variant="body_3"
              >
                {t("delivery_and_payment")}
              </Typography>
              <Typography
                as={Link}
                href={Paths.shares}
                variant="body_3"
                className={s.promotion}
              >
                <PercentIcon />
                {t("promotions")}
              </Typography>
              <Accordion
                title={
                  <Typography variant="body_3" className={s.accordionTitle}>
                    {t("cooperation")}
                  </Typography>
                }
                className={s.accordion}
              >
                <Typography as={Link} href={Paths.forBusiness} variant="body_3">
                  {t("for_business")}
                </Typography>
                <Typography as={Link} href={Paths.vacancies} variant="body_3">
                  {t("vacancies")}
                </Typography>
              </Accordion>
              <Typography as={Link} href={Paths.about} variant="body_3">
                {t("about_us")}
              </Typography>
              <Typography as={Link} href={Paths.contacts} variant="body_3">
                {t("contacts")}
              </Typography>
              <Typography as={Link} href={"#"} variant="body_3">
                {t("privacy_policy")}
              </Typography>
            </nav>
          </div>
          <div className={s.phoneAndTime}>
            <div className={s.card}>
              <Typography variant="body_3" as="h6">
                {t("phone")}
              </Typography>
              <div className={s.phoneContainer}>
                <Image
                  src={"/images/phone-operator.png"}
                  width={45}
                  height={16}
                  alt="phone operator"
                  className={s.image}
                />
                <Typography
                  variant="h3"
                  as={Link}
                  href={"tel:+374 (33) 144-000"}
                >
                  +374 (33) 144-000
                </Typography>
              </div>
            </div>
            <div className={s.card}>
              <Typography variant="body_3" as="h6">
                {t("working_hours")}
              </Typography>
              <Typography variant="h3" as="p">
                {t("working_hours_value")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={s.containerInfo}>
        <div className={s.contentInfo}>
          <Typography variant="body_6">ⓒ2024 domix.am</Typography>
          <div className={s.icons}>
            <MasterCardIcon />
            <VisaIcon />
            <IdramIcon />
          </div>
          <Typography variant="body_6">
            {t("design_and_development")}{" "}
            <Typography variant="body_6" as={Link} href="https://web-space.by/">
              Web-space.by
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};
