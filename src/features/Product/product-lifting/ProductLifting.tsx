import { Typography } from "@/shared/ui/typography";
import React from "react";
import s from "./ProductLifting.module.scss";
import { useTranslations } from "next-intl";

export const ProductLifting = () => {
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.lifting_table"
  );

  return (
    <table className={s.tablePayment}>
      <thead>
        <tr>
          <Typography as="th" variant={"body_6"} scope="row">
            {t("column1")}
          </Typography>
          <Typography variant={"body_6"} as="td">
            {t("column2")}
          </Typography>
          <Typography variant={"body_6"} as="td">
            {t("column3")}
          </Typography>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Typography as="th" variant={"body_5"} scope="row">
            {t("row1.name")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row1.size")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row1.price")}
          </Typography>
        </tr>
        <tr>
          <Typography as="th" variant={"body_5"} scope="row">
            {t("row2.name")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row2.size")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row2.price")}
          </Typography>
        </tr>
        <tr>
          <Typography as="th" variant={"body_5"} scope="row">
            {t("row3.name")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row3.size")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row3.price")}
          </Typography>
        </tr>
        <tr>
          <Typography as="th" variant={"body_5"} scope="row">
            {t("row4.name")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row4.size")}
          </Typography>
          <Typography variant={"body_7"} as="td">
            {t("row4.price")}
          </Typography>
        </tr>
      </tbody>
    </table>
  );
};
