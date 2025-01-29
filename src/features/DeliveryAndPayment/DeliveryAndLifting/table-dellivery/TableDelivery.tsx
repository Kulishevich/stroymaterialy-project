import {
  AddressLocationIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import React from "react";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import s from "./TableDelivery.module.scss";
import { TableDelliveryMobile } from "./TableDelliveryMobile/TableDelliveryMobile";

export const TableDelivery = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.tableContainer}>
      <Typography variant="h3" as="h3">
        Стоимость доставки
      </Typography>
      {!isMobile ? (
        <table className={s.tableDelivery}>
          <thead>
            <tr>
              <th>
                <Typography variant="body_2">Вид доставки</Typography>
              </th>
              <th>
                <TruckSpeedIcon />
                <Typography variant="body_2">Экспресс</Typography>
                <Typography variant="body_4">машина 0,7-2,5 т</Typography>
              </th>
              <th>
                <TruckSpeedIcon />
                <Typography variant="body_2">Стандартная</Typography>
                <Typography variant="body_4">машина 0,7-2,5 т</Typography>
              </th>
              <th>
                <MotorbikeSideIcon />
                <Typography variant="body_2">Курьер</Typography>
                <Typography variant="body_4">мопед</Typography>
              </th>
              <th>
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
      ) : (
        <TableDelliveryMobile />
      )}
    </div>
  );
};
