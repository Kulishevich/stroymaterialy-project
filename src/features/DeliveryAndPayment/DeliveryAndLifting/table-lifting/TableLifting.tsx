import { Typography } from "@/shared/ui/typography";
import React from "react";
import s from "./TableLifting.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { TableLiftingMobile } from "./table-lifting-mobile";
import { useTranslations } from "next-intl";

export const TableLifting = () => {
  const isMobile = useIsMobile("tablet");
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.lifting_table"
  );

  return (
    <div className={s.tableContainer}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      {!isMobile ? (
        <table className={s.tablePayment}>
          <thead>
            <tr>
              <Typography as="th" variant={"body_3"} scope="row">
                {t("column1")}
              </Typography>
              <Typography variant={"body_3"} as="td">
                {t("column2")}
              </Typography>
              <Typography variant={"body_3"} as="td">
                {t("column3")}
              </Typography>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                {t("row1.name")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row1.size")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row1.price")}
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                {t("row2.name")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row2.size")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row2.price")}
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                {t("row3.name")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row3.size")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row3.price")}
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                {t("row4.name")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row4.size")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("row4.price")}
              </Typography>
            </tr>
          </tbody>
        </table>
      ) : (
        <TableLiftingMobile />
      )}
    </div>
  );
};
