import React from "react";
import s from "./InfoRegularCustomer.module.scss";
import { Typography } from "@/components/ui/typography";
// import {
//   BagOutlinedIcon,
//   DollarOutlinedIcon,
//   MaleIcon,
//   TruckOutlinedIcon,
// } from "@/assets/icons";
// import { useIsMobile } from "@/shared/hooks/useIsMobile";
// import { PaymentTableMobile } from "./payment-table-mobile";
import { useTranslations } from "next-intl";

export const InfoRegularCustomer = () => {
  // const isMobile = useIsMobile("tablet");
  const t = useTranslations("regular_customer.info_regular_customer");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography variant="h3" as="h3">
        {t("subtitle")}
      </Typography>

      <ol>
        <Typography variant="h3" as="h3">
          {t("how_it_works.title")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.register")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.first_purchase")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.personal_discounts")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.free_delivery")}
        </Typography>
      </ol>

      <ul>
        <Typography variant="body_3" as="li">
          {t("notes.discount_visibility")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("notes.accumulate_and_save")}
        </Typography>
      </ul>

      <Typography variant="h3" as="h3">
        {t("register_now")}
      </Typography>
      {/* {!isMobile ? (
        <table className={s.tablePayment}>
          <thead>
            <tr>
              <th>
                <DollarOutlinedIcon />
                <Typography variant={"body_2"}>
                  {t("purchase_amount")}
                </Typography>
              </th>
              <th>
                <BagOutlinedIcon />
                <Typography variant={"body_2"}>
                  {t("future_purchases")}
                </Typography>
              </th>
              <th>
                <TruckOutlinedIcon />
                <Typography variant={"body_2"}>{t("delivery")}</Typography>
              </th>
              <th>
                <MaleIcon />
                <Typography variant={"body_2"}>
                  {t("loader_services")}
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography variant={"body_2"} as="td">
                {t("range_0_1m")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("discount_3")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("no_discount")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("no_discount")}
              </Typography>
            </tr>
            <tr>
              <Typography variant={"body_2"} as="td">
                {t("range_1_3m")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("discount_5")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("delivery_free")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("no_discount")}
              </Typography>
            </tr>
            <tr>
              <Typography variant={"body_2"} as="td">
                {t("above_3m")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("discount_10")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("delivery_free")}
              </Typography>
              <Typography variant={"body_2"} as="td">
                {t("loader_free")}
              </Typography>
            </tr>
          </tbody>
        </table>
      ) : (
        <PaymentTableMobile />
      )} */}
    </div>
  );
};
