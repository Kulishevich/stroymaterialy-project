import {
  AddressLocationIcon,
  ArrowDownIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/shared/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./TableDelliveryMobile.module.scss";
import { useTranslations } from "next-intl";

export const TableDelliveryMobile = () => {
  const [activeColumn, setActiveColumn] = useState(0);
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.table_delivery"
  );

  const deliveryData = [
    {
      type: {
        icon: <TruckSpeedIcon />,
        title: t("express"),
        description: t("express_details"),
      },
      details: {
        place: { title: "", value: t("yerevan") },
        time: { title: t("same_day"), value: t("within_2_4_hours") },
        price: { title: t("starting_from"), value: t("from_2000_dram") },
        notes: { title: "", value: "-" },
      },
    },
    {
      type: {
        icon: <TruckSpeedIcon />,
        title: t("standard"),
        description: t("standard_details"),
      },
      details: {
        place: { title: "", value: t("yerevan") },
        time: { title: "", value: t("within_1_2_days") },
        price: { title: "", value: t("free") },
        notes: { title: t("exception"), value: t("cement_gypsum") },
      },
    },
    {
      type: {
        icon: <MotorbikeSideIcon />,
        title: t("courier"),
        description: t("courier_details"),
      },
      details: {
        place: { title: "", value: t("yerevan") },
        time: { title: t("same_day"), value: t("within_2_hours") },
        price: { title: "", value: t("1500_dram") },
        notes: { title: t("weight_limit"), value: t("up_to_10kg") },
      },
    },
    {
      type: {
        icon: <DeliveryPackageIcon />,
        title: t("post_delivery"),
        description: t("post_delivery_details"),
      },
      details: {
        place: { title: "", value: t("all_regions") },
        time: { title: "", value: t("within_1_3_days") },
        price: { title: "", value: t("700_dram") },
        notes: { title: t("weight_limit"), value: t("up_to_5kg") },
      },
    },
  ];

  return (
    <table className={s.tableDeliveryMobile}>
      <thead>
        <tr>
          <th>
            <Typography variant="body_2">{t("delivery_type")}</Typography>
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
            <AddressLocationIcon /> {t("location")}
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
            <ClockIcon /> {t("time")}
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
            {t("prices")}
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
            {t("special_notes")}
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
