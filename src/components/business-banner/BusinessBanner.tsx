import React from "react";
import s from "./BusinessBanner.module.scss";
import { Typography } from "../ui/typography";
import { Logo } from "@/assets/icons/logo";

export const BusinessBanner = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Для бизнеса
      </Typography>
      <div className={s.imageContainer}>
        <img
          src={"/images/for-business/for-business.jpg"}
          alt="for business banner"
          className={s.image}
        />
        <Logo />
        <Typography variant="h4" as="h4">
          Самая большая, надёжная, быстрая и удобная строительная
          онлайн-площадка
        </Typography>
        <Typography variant="body_1">
          Каждое строительство начинается со строительных материалов.
        </Typography>
        <Typography variant="body_1">
          &ldquo;Domix.am&ldquo; – молодая, динамичная, развивающаяся компания,
          пришедшая на строительный рынок с тем, чтобы предоставить потребителю
          качественные строительные товары и услуги.
        </Typography>
        <Typography variant="body_1">
          Мы полностью принимаем всю ответственность и конкуренцию на растущем
          строительном рынке.
        </Typography>
        <Typography variant="body_1">
          Стремимся к максимально эффективным и современным рабочим методам.
        </Typography>
        <Typography variant="body_1">
          Уверяем, что с нами удобно и быстро.
        </Typography>
      </div>
    </div>
  );
};
