import React from "react";
import s from "./Footer.module.scss";
import { Logo } from "@/assets/icons/logo";
import { SocialNetworks } from "../social-networks";
import { Typography } from "../ui/typography";
import Link from "next/link";
import {
  IdramIcon,
  MasterCardIcon,
  PercentIcon,
  VisaIcon,
} from "@/assets/icons";
import Image from "next/image";
import { Paths } from "@/shared/enums";
import { Dropdown } from "../ui/dropdown";
import { useGetCategoriesQuery } from "@/api/categories/categories.api";

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

export const Footer = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <div className={s.wrapper}>
      <div className={s.containerMain}>
        <div className={s.contentMain}>
          <div className={s.contacts}>
            <Logo />
            <SocialNetworks />
            <Typography as="h3">Email: Info@domix.am</Typography>
          </div>
          <div className={s.categoryes}>
            <Typography variant="h4" as="h4">
              Категории
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
              Компания
            </Typography>
            <nav className={s.navigateContainer}>
              <Typography as={Link} href={Paths.home} variant="body_3">
                Главная
              </Typography>
              <Typography
                as={Link}
                href={Paths.deliveryAndPayment}
                variant="body_3"
              >
                Доставка и оплата
              </Typography>
              <Typography
                as={Link}
                href={Paths.shares}
                variant="body_3"
                className={s.promotion}
              >
                <PercentIcon />
                Акции
              </Typography>
              <Dropdown
                placeholder="Сотрудничество"
                items={cooperationOptions}
                className={(s.navLink, s.dropdown)}
              />
              <Typography as={Link} href={Paths.about} variant="body_3">
                О нас
              </Typography>
              <Typography as={Link} href={Paths.contacts} variant="body_3">
                Контакты
              </Typography>
              <Typography as={Link} href={"#"} variant="body_3">
                Политика конфиденциальности
              </Typography>
            </nav>
          </div>
          <div className={s.phoneAndTime}>
            <div className={s.card}>
              <Typography variant="body_3" as="h6">
                Телефон:
              </Typography>
              <div className={s.phoneContainer}>
                <Image
                  src={"/images/phone-operator.png"}
                  width={45}
                  height={16}
                  alt="phone operator"
                  className={s.image}
                />
                <Typography variant="h3" as="p">
                  +374 (33) 144-000
                </Typography>
              </div>
            </div>
            <div className={s.card}>
              <Typography variant="body_3" as="h6">
                Время работы:
              </Typography>
              <Typography variant="h3" as="p">
                с 09:00 до 22:00 ежедневно
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
            Дизайн и разработка: Web-space.by
          </Typography>
        </div>
      </div>
    </div>
  );
};
