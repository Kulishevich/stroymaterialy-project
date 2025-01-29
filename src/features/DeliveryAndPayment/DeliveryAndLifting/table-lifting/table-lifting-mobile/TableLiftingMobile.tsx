import { ArrowDownIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./TableLiftingMobile.module.scss";

const deliveryData = [
  {
    title: "1 мешок",
    value: "25-50 кг",
    price: "100 драм/ этаж",
  },
  {
    title: "Гипсокартон",
    value: "1200x2400 мм",
    price: "150 драм/ этаж",
  },
  {
    title: "Профили",
    value: "20 штук",
    price: "150 драм/ этаж",
  },
];

export const TableLiftingMobile = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">Вид груза</Typography>
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
          <Typography as="th" variant="body_3" scope="row">
            кг / штук
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].value}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_3" scope="row">
            цена
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].price}
            </Typography>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
