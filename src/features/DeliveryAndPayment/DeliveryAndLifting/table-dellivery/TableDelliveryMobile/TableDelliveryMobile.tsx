import {
  AddressLocationIcon,
  ArrowDownIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./TableDelliveryMobile.module.scss";

const deliveryData = [
  {
    type: {
      icon: <TruckSpeedIcon />,
      title: "Экспресс",
      description: "машина 0,7-2,5 т",
    },
    details: {
      place: { title: "Город", value: "Ереван" },
      time: { title: "день в день", value: "в течение 2-4 часов" },
      price: { title: "Начиная", value: "с 2000 драм" },
      notes: { title: "", value: "-" },
    },
  },
  {
    type: {
      icon: <TruckSpeedIcon />,
      title: "Стандартная",
      description: "машина 0,7-2,5 т",
    },
    details: {
      place: { title: "Город", value: "Ереван" },
      time: { title: "", value: "в течение 1-2 дней" },
      price: { title: "", value: "Бесплатная" },
      notes: { title: "Исключение", value: "Цемент, гипсокартон" },
    },
  },
  {
    type: {
      icon: <MotorbikeSideIcon />,
      title: "Курьер",
      description: "мопед",
    },
    details: {
      place: { title: "Город", value: "Ереван" },
      time: { title: "день в день", value: "в течение 2 часов" },
      price: { title: "", value: "1500 драм" },
      notes: { title: "Вес", value: "до 10 кг" },
    },
  },
  {
    type: {
      icon: <DeliveryPackageIcon />,
      title: "Доставка",
      description: "Ай пост",
    },
    details: {
      place: { title: "Город", value: "все регионы" },
      time: { title: "", value: "в течение 1-3 дней" },
      price: { title: "", value: "700 драм" },
      notes: { title: "Вес", value: "до 5 кг" },
    },
  },
];

export const TableDelliveryMobile = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">Вид доставки</Typography>
          </th>
          <th>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={s.trigger}>
                <div>
                  <Typography variant="body_2">
                    {deliveryData[activeColumn].type.title}
                  </Typography>
                  <Typography variant="body_4">
                    {deliveryData[activeColumn].type.description}
                  </Typography>
                </div>
                <ArrowDownIcon />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content className={s.content}>
                {deliveryData.map((item, index) => (
                  <DropdownMenu.Item className={s.item} key={index} asChild>
                    <Typography onClick={() => setActiveColumn(index)}>
                      {item.type.title}
                    </Typography>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Typography as="th" variant="h4" scope="row">
            <AddressLocationIcon /> Место
          </Typography>
          <td>
            <Typography variant={"body_4"}>
              {deliveryData[activeColumn].details.place.title}
            </Typography>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].details.place.value}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="h4" scope="row">
            <ClockIcon /> Время
          </Typography>
          <td>
            <Typography variant={"body_4"}>
              {deliveryData[activeColumn].details.time.value}
            </Typography>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].details.time.value}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="h4" scope="row">
            <DollarIcon />
            Цены
          </Typography>
          <td>
            <Typography variant={"body_4"}>
              {deliveryData[activeColumn].details.price.value}
            </Typography>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].details.price.value}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="h4" scope="row">
            Особые примечания
          </Typography>
          <td>
            <Typography variant={"body_4"}>
              {deliveryData[activeColumn].details.notes.title}
            </Typography>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].details.notes.value}
            </Typography>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
