import { ArrowDownIcon } from "@/shared/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./TableLiftingMobile.module.scss";
import { useTranslations } from "next-intl";

export const TableLiftingMobile = () => {
  const [activeColumn, setActiveColumn] = useState(0);
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.lifting_table"
  );

  const deliveryData = [
    {
      title: t("row1.name"),
      value: t("row1.size"),
      price: t("row1.price"),
    },
    {
      title: t("row2.name"),
      value: t("row2.size"),
      price: t("row2.price"),
    },
    {
      title: t("row3.name"),
      value: t("row3.size"),
      price: t("row3.price"),
    },
    {
      title: t("row4.name"),
      value: t("row4.size"),
      price: t("row4.price"),
    },
  ];

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">{t("column1")}</Typography>
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
            {t("column2")}
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].value}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_3" scope="row">
            {t("column3")}
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
