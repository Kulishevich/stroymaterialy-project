import React, { useState } from "react";
import s from "./DeliveryAndPayment.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
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

        <div className={s.deliveryCost}>
          <table>
            <Typography variant="h3" as="caption">
              Стоимость доставки
            </Typography>
            <thead>
              <tr>
                <th>
                  <Typography variant="body_2">Вид доставки</Typography>
                </th>
                <th>
                  <Typography variant="body_2">Экспресс</Typography>
                  <Typography variant="body_4">машина 0,7-2,5 т</Typography>
                </th>
                <th>
                  <Typography variant="body_2">Стандартная</Typography>
                  <Typography variant="body_4">машина 0,7-2,5 т</Typography>
                </th>
                <th>
                  <Typography variant="body_2">Курьер</Typography>
                  <Typography variant="body_4">мопед</Typography>
                </th>
                <th>
                  <Typography variant="body_2">Доставка</Typography>
                  <Typography variant="body_4">Ай пост</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Место</td>
                <td>
                  <Typography>Город</Typography>
                  <Typography>Ереван</Typography>
                </td>
                <td>
                  <Typography>Город</Typography>
                  <Typography>Ереван</Typography>
                </td>
                <td>
                  <Typography>Город</Typography>
                  <Typography>Ереван</Typography>
                </td>
                <td>
                  <Typography>Город</Typography>
                  <Typography>все регионы</Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
