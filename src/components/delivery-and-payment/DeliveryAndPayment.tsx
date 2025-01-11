import React, { useState } from "react";
import s from "./DeliveryAndPayment.module.scss";
import {
  AddressLocationIcon,
  ArrowRightIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/assets/icons";
import { Typography } from "../ui/typography";
import clsx from "clsx";

const categoryes = [
  {
    id: "1",
    title: "Стоимость доставки и подъёма",
    Value: "Стоимость доставки и подъёма",
  },
  {
    id: "2",
    title: "Способы оплаты",
    Value: "Способы оплаты",
  },
  {
    id: "3",
    title: "Условия предоставления услуг",
    Value: "Условия предоставления услуг",
  },
  {
    id: "4",
    title: "Условия подъёма",
    Value: "Условия подъёма",
  },
];

export const DeliveryAndPayment = () => {
  const [activeCategory, setActiveCategory] = useState(categoryes[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Доставка и оплата
      </Typography>
      <div className={s.content}>
        <div className={s.navigate}>
          {categoryes.map((elem) => (
            <div
              className={clsx(
                s.navItem,
                activeCategory === elem.id && s.active
              )}
              key={elem.id}
              onClick={() => setActiveCategory(elem.id)}
            >
              <Typography variant="h4" as="h4">
                {elem.title}
              </Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </div>
          ))}
        </div>

        <table className={s.table}>
          <Typography variant="h3" as="caption">
            Стоимость доставки
          </Typography>
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
    </div>
  );
};
