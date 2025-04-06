import { ArrowDownIcon } from "@/shared/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./PaymentTableMobile.module.scss";
import { useTranslations } from "next-intl";

export const PaymentTableMobile = () => {
  const t = useTranslations("regular_customer.info_regular_customer");
  const [activeColumn, setActiveColumn] = useState(0);

  const deliveryData = [
    {
      title: t("future_purchases"),
      priceLow: t("discount_3"),
      priceMiddle: t("discount_5"),
      priceHigh: t("discount_10"),
    },
    {
      title: t("delivery"),
      priceLow: "-",
      priceMiddle: t("delivery_free"),
      priceHigh: t("loader_free"),
    },
    {
      title: t("loader_services"),
      priceLow: "-",
      priceMiddle: "-",
      priceHigh: t("loader_free"),
    },
  ];

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">{t("purchase_amount")}</Typography>
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
            {t("range_0_1m")}
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].priceLow}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_2" scope="row">
            {t("range_1_3m")}
          </Typography>
          <td>
            <Typography variant={"body_2"}>
              {deliveryData[activeColumn].priceMiddle}
            </Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_2" scope="row">
            {t("above_3m")}
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
