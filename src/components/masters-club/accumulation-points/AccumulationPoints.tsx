import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./AccumulationPoints.module.scss";

export const AccumulationPoints = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h4" as="h4">
          Возвращайте до 10% от стоимости товара!
        </Typography>
        <Typography variant="body_1">
          Правила накопления баллов в Domix-club’е
        </Typography>
      </div>
      <ul>
        <Typography variant="body_3" as="li">
          Для получения накопительных баллов в системе Вам необходимо пройти
          простую регистрацию на нашем сайте, перейдя по данной ссылке (ссылка
          кликабельна). https://shinmag.am/shinmag-club
        </Typography>
        <Typography variant="body_3" as="li">
          После регистрации на сайте Вы можете собирать и оформлять свои заказы.
        </Typography>
        <Typography variant="body_3" as="li">
          Около стоимости каждого товара Вы увидите соответствующее количество
          накопительных баллов.
        </Typography>
        <Typography variant="body_3" as="li">
          1 накопительный балл равен 1 драму.
        </Typography>
        <Typography variant="body_3" as="li">
          Все выбранные товары в количестве отобразятся у Вас в корзине.
        </Typography>
        <Typography variant="body_3" as="li">
          Около итоговой суммы заказа в корзине будет высвечено количество
          накопительных баллов,которые Вы получите после совершения покупки. Эти
          баллы будут отображаться в Вашем личном кабинете в графе
          &quot;Накопительные баллы&quot;.
        </Typography>
        <Typography variant="body_3" as="li">
          Накопительные баллы Вы можете при запросе вывести в виде наличных
          денежных средств либо на карту ЧЕРЕЗ ДЕНЬ после совершения покупки. А
          также, Вы можете их использовать в дальнейшем при совершении покупок в
          Shinmag.
        </Typography>
        <Typography variant="body_3" as="li">
          Возврат можно осуществить в размере до 10% от стоимости товара!
        </Typography>
      </ul>

      <div className={s.footer}>
        <Typography variant="body_2">
          Совершайте покупки комфортно с выгодой для себя!
        </Typography>
        <Typography variant="body_1">Ваш Domix.</Typography>
      </div>
    </div>
  );
};
