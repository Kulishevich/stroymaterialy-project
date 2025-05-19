import { SuccessIcon } from "@/shared/assets/icons";
import React from "react";
import s from "./OrderSuccess.module.scss";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { Paths } from "@/shared/enums";

export const OrderSuccess = () => {
  return (
    <div className={s.container}>
      <SuccessIcon />
      <div className={s.textContent}>
        <Typography variant="h2" as="h2">
          Ваш заказ оформлен!
        </Typography>
        {/* <Typography variant="body_1">
          Номер вашего заказа: <strong>12345</strong>
        </Typography> */}
        <Typography variant="body_3">
          Скоро с вами свяжется наш менеджер для подтверждения заказа
        </Typography>
      </div>

      <div className={s.buttonsContainer}>
        <Button as={Link} href={`${Paths.profile}?tab=orders`}>
          Заказы
        </Button>
        <Button variant="secondary" as={Link} href={"/"}>
          Перейти на главную
        </Button>
      </div>
    </div>
  );
};
