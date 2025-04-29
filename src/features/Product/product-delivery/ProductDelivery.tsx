import React from "react";
import s from "./ProductDelivery.module.scss";
import { Typography } from "@/shared/ui/typography";
import {
  AddressLocationIcon,
  ClockIcon,
  DollarIcon,
} from "@/shared/assets/icons";
import { useTranslations } from "next-intl";

export const ProductDelivery = () => {
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.table_delivery"
  );

  return (
    <table className={s.tableDelivery}>
      <thead>
        <tr>
          <th className={s.tableTitle}>
            <Typography variant="body_5">{t("delivery_type")}</Typography>
          </th>
          <th className={s.tableTitle}>
            <Typography variant="body_5">{t("express")}</Typography>
          </th>
          <th className={s.tableTitle}>
            <Typography variant="body_5">{t("standard")}</Typography>
          </th>
          <th className={s.tableTitle}>
            <Typography variant="body_5">{t("courier")}</Typography>
          </th>
          <th className={s.tableTitle}>
            <Typography variant="body_5">{t("post_delivery")}</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Typography as="th" variant="body_5" scope="row">
            <AddressLocationIcon /> {t("location")}
          </Typography>
          <td>
            <Typography variant="body_8">{t("city")}</Typography>
            <Typography variant="body_7">{t("yerevan")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("city")}</Typography>
            <Typography variant="body_7">{t("yerevan")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("city")}</Typography>
            <Typography variant="body_7">{t("yerevan")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("city")}</Typography>
            <Typography variant="body_7">{t("all_regions")}</Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_5" scope="row">
            <ClockIcon /> {t("time")}
          </Typography>
          <td>
            <Typography variant="body_8">{t("same_day")}</Typography>
            <Typography variant="body_7">{t("within_2_4_hours")}</Typography>
          </td>
          <td>
            <Typography variant="body_7">{t("within_1_2_days")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("same_day")}</Typography>
            <Typography variant="body_7">{t("within_2_hours")}</Typography>
          </td>
          <td>
            <Typography variant="body_7">{t("within_1_3_days")}</Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_5" scope="row">
            <DollarIcon />
            {t("prices")}
          </Typography>
          <td>
            <Typography variant="body_8">{t("starting_from")}</Typography>
            <Typography variant="body_7">{t("from_2000_dram")}</Typography>
          </td>
          <td>
            <Typography variant="body_7">{t("free")}</Typography>
          </td>
          <td>
            <Typography variant="body_7">{t("1500_dram")}</Typography>
          </td>
          <td>
            <Typography variant="body_7">{t("700_dram")}</Typography>
          </td>
        </tr>
        <tr>
          <Typography as="th" variant="body_5" scope="row">
            {t("special_notes")}
          </Typography>
          <td>
            <Typography variant="body_5">-</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("exception")}</Typography>
            <Typography variant="body_7">{t("cement_gypsum")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("weight_limit")}</Typography>
            <Typography variant="body_7">{t("up_to_10kg")}</Typography>
          </td>
          <td>
            <Typography variant="body_8">{t("weight_limit")}</Typography>
            <Typography variant="body_7">{t("up_to_5kg")}</Typography>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
