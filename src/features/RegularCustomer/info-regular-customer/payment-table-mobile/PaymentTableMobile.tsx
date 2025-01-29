import { ArrowDownIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./PaymentTableMobile.module.scss";

const deliveryData = [
  {
    title: "Следующие покупки",
    priceLow: "3% скидка",
    priceMiddle: "5% скидка",
    priceHigh: "10% скидка",
  },
  {
    title: "Доставка",
    priceLow: "-",
    priceMiddle: "бесплатно",
    priceHigh: "бесплатно",
  },
  {
    title: "Услуги грузчика",
    priceLow: "-",
    priceMiddle: "-",
    priceHigh: "бесплатно",
  },
];

export const PaymentTableMobile = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">Стоимость покупки</Typography>
          </th>
          <th>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={s.trigger}>
                <div>
                  <Typography variant="body_2">
                    {deliveryData[activeColumn].title}
                  </Typography>
                </div>
                <ArrowDownIcon />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content className={s.content}>
                {deliveryData.map((item, index) => (
                  <DropdownMenu.Item className={s.item} key={index} asChild>
                    <Typography onClick={() => setActiveColumn(index)}>
                      {item.title}
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
          <Typography as="th" variant="body_2" scope="row">
            0 до 1 млн драм
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].priceLow}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_2" scope="row">
            от 1 до 3 млн драм
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].priceMiddle}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_2" scope="row">
            3 млн драм
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].priceHigh}
            </Typography>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
