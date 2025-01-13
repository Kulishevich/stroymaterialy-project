import React from "react";
import s from "./InfoRegularCustomer.module.scss";
import { Typography } from "@/components/ui/typography";
import {
  BagOutlinedIcon,
  DollarOutlinedIcon,
  MaleIcon,
  TruckOutlinedIcon,
} from "@/assets/icons";

export const InfoRegularCustomer = () => {
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Накопительная система скидок Domix
      </Typography>
      <ul>
        <Typography variant="body_3" as="li">
          В услугу доставки (кроме мопеда) не входит разгрузка (выгрузка из
          автомобиля), подъем и транспортировка грузов являются отдельными
          услугами.
        </Typography>
        <Typography variant="body_3" as="li">
          Доставка осуществляется после подтверждения готовности к получению
          товара. В день доставки, пожалуйста, свяжитесь с телефоном, указанным
          в заказе.
        </Typography>
        <Typography variant="body_3" as="li">
          Если вы выбрали «Экспресс» доставку, машина прибудет по адресу даже
          без предварительного подтверждения заказа по телефону.
        </Typography>
        <Typography variant="body_3" as="li">
          Вы можете изменить время доставки или настроить заказ, связавшись с
          012440440.
        </Typography>
        <Typography variant="body_3" as="li">
          Если подъезд к месту разгрузки затруднен, то автомобиль остановится на
          максимально близком расстоянии от него, не нарушая ПДД и исключая
          возможность повреждения транспорта. На разгрузку автомобиля массой до
          1,8 тонны отводится 30 минут, более 1,8 тонны – 60 минут.
        </Typography>
        <Typography variant="body_3" as="li">
          Оплатить доставку можно заранее любым удобным способом (на сайте, по
          телефону), а также на месте наличными или банковской картой, до начала
          разгрузки.
        </Typography>
        <Typography variant="body_3" as="li">
          Если у вас есть вопросы, связанные с качеством или количеством
          продукции, вы можете обратиться к представителю компании на месте или
          в Службу поддержки клиентов по телефону 012440440. Номер телефона
          также указан в товарном чеке.
        </Typography>
      </ul>

      <table className={s.tablePayment}>
        <thead>
          <tr>
            <th>
              <DollarOutlinedIcon />
              <Typography variant={"body_2"}>Стоимость покупки</Typography>
            </th>
            <th>
              <BagOutlinedIcon />
              <Typography variant={"body_2"}>Следующие покупки</Typography>
            </th>
            <th>
              <TruckOutlinedIcon />
              <Typography variant={"body_2"}>Доставка</Typography>
            </th>
            <th>
              <MaleIcon />
              <Typography variant={"body_2"}>Услуги грузчика</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Typography variant={"body_2"} as="td">
              0 до 1 млн драм
            </Typography>
            <Typography variant={"body_2"} as="td">
              3% скидка
            </Typography>
            <Typography variant={"body_2"} as="td">
              -
            </Typography>
            <Typography variant={"body_2"} as="td">
              -
            </Typography>
          </tr>
          <tr>
            <Typography variant={"body_2"} as="td">
              от 1 до 3 млн драм
            </Typography>
            <Typography variant={"body_2"} as="td">
              5% скидка
            </Typography>
            <Typography variant={"body_2"} as="td">
              бесплатно
            </Typography>
            <Typography variant={"body_2"} as="td">
              -
            </Typography>
          </tr>
          <tr>
            <Typography variant={"body_2"} as="td">
              3 млн драм
            </Typography>
            <Typography variant={"body_2"} as="td">
              10% скидка
            </Typography>
            <Typography variant={"body_2"} as="td">
              бесплатно
            </Typography>
            <Typography variant={"body_2"} as="td">
              бесплатно
            </Typography>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
