import React from "react";
import s from "./DeliveryAndLifting.module.scss";
import {
  AddressLocationIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/assets/icons";
import { Typography } from "@/components/ui/typography";

export const DeliveryAndLifting = () => {
  return (
    <div className={s.tablesContainer}>
      <div className={s.tableContainer}>
        <Typography variant="h3" as="h3">
          Стоимость доставки
        </Typography>
        <table className={s.tableDelivery}>
          <thead>
            <tr>
              <th className={s.tableTitle}>
                <Typography variant="body_2">Вид доставки</Typography>
              </th>
              <th className={s.tableTitle}>
                <TruckSpeedIcon />
                <Typography variant="body_2">Экспресс</Typography>
                <Typography variant="body_4">машина 0,7-2,5 т</Typography>
              </th>
              <th className={s.tableTitle}>
                <TruckSpeedIcon />
                <Typography variant="body_2">Стандартная</Typography>
                <Typography variant="body_4">машина 0,7-2,5 т</Typography>
              </th>
              <th className={s.tableTitle}>
                <MotorbikeSideIcon />
                <Typography variant="body_2">Курьер</Typography>
                <Typography variant="body_4">мопед</Typography>
              </th>
              <th className={s.tableTitle}>
                <DeliveryPackageIcon />
                <Typography variant="body_2">Доставка</Typography>
                <Typography variant="body_4">Ай пост</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <AddressLocationIcon /> Место
              </Typography>
              <td>
                <Typography variant={"body_4"}>Город</Typography>
                <Typography variant={"body_2"}>Ереван</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Город</Typography>
                <Typography variant={"body_2"}>Ереван</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Город</Typography>
                <Typography variant={"body_2"}>Ереван</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Город</Typography>
                <Typography variant={"body_2"}>все регионы</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <ClockIcon /> Время
              </Typography>
              <td>
                <Typography variant={"body_4"}>день в день</Typography>
                <Typography variant={"body_2"}>в течение 2-4 часов</Typography>
              </td>
              <td>
                <Typography variant={"body_2"}>в течение 1-2 дней</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>день в день</Typography>
                <Typography variant={"body_2"}>в течение 2 часов</Typography>
              </td>
              <td>
                <Typography variant={"body_2"}>в течение 1-3 дней</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <DollarIcon />
                Цены
              </Typography>
              <td>
                <Typography variant={"body_4"}>Начиная</Typography>
                <Typography variant={"body_2"}>с 2000 драм</Typography>
              </td>
              <td>
                <Typography variant={"body_2"}>Бесплатная</Typography>
              </td>
              <td>
                <Typography variant={"body_2"}>1500 драм</Typography>
              </td>
              <td>
                <Typography variant={"body_2"}>700 драм</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                Особые примечания
              </Typography>
              <td>
                <Typography variant={"body_2"}>-</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Исключение</Typography>
                <Typography variant={"body_2"}>Цемент, гипсокартон</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Вес</Typography>
                <Typography variant={"body_2"}>до 10 кг</Typography>
              </td>
              <td>
                <Typography variant={"body_4"}>Вес</Typography>
                <Typography variant={"body_2"}>до 5 кг</Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={s.tableContainer}>
        <Typography variant="h3" as="h3">
          Стоимость подъёма
        </Typography>
        <table className={s.tablePayment}>
          <thead>
            <tr>
              <Typography as="th" variant={"body_3"} scope="row">
                Вид груза
              </Typography>
              <Typography variant={"body_3"} as="td">
                кг / штук
              </Typography>
              <Typography variant={"body_3"} as="td">
                цена
              </Typography>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                1 мешок
              </Typography>
              <Typography variant={"body_2"} as="td">
                25-50 кг
              </Typography>
              <Typography variant={"body_2"} as="td">
                100 драм/ этаж
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                Гипсокартон
              </Typography>
              <Typography variant={"body_2"} as="td">
                1200x2400 мм
              </Typography>
              <Typography variant={"body_2"} as="td">
                150 драм/ этаж
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                Профили
              </Typography>
              <Typography variant={"body_2"} as="td">
                20 штук
              </Typography>
              <Typography variant={"body_2"} as="td">
                150 драм/ этаж
              </Typography>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
