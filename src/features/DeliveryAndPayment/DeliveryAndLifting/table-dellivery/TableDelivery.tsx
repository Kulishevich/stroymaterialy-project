import {
  AddressLocationIcon,
  ClockIcon,
  DeliveryPackageIcon,
  DollarIcon,
  MotorbikeSideIcon,
  TruckSpeedIcon,
} from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import React from "react";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import s from "./TableDelivery.module.scss";
import { TableDelliveryMobile } from "./TableDelliveryMobile/TableDelliveryMobile";
import { useTranslations } from "next-intl";

export const TableDelivery = () => {
  const isMobile = useIsMobile("tablet");
  const t = useTranslations(
    "delivery_and_payment.delivery_and_lifting_payment.table_delivery"
  );
  return (
    <div className={s.tableContainer}>
      <Typography variant="h3" as="h3">
        {t("delivery_price")}
      </Typography>
      {!isMobile ? (
        <table className={s.tableDelivery}>
          <thead>
            <tr>
              <th>
                <Typography variant="body_2">{t("delivery_type")}</Typography>
              </th>
              <th>
                <TruckSpeedIcon />
                <Typography variant="body_2">{t("express")}</Typography>
                <Typography variant="body_4">{t("express_details")}</Typography>
              </th>
              <th>
                <TruckSpeedIcon />
                <Typography variant="body_2">{t("standard")}</Typography>
                <Typography variant="body_4">
                  {t("standard_details")}
                </Typography>
              </th>
              <th>
                <MotorbikeSideIcon />
                <Typography variant="body_2">{t("courier")}</Typography>
                <Typography variant="body_4">{t("courier_details")}</Typography>
              </th>
              <th>
                <DeliveryPackageIcon />
                <Typography variant="body_2">{t("post_delivery")}</Typography>
                <Typography variant="body_4">
                  {t("post_delivery_details")}
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <AddressLocationIcon /> {t("location")}
              </Typography>
              <td>
                <Typography variant="body_2">{t("yerevan")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("yerevan")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("yerevan")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("all_regions")}</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <ClockIcon /> {t("time")}
              </Typography>
              <td>
                <Typography variant="body_4">{t("same_day")}</Typography>
                <Typography variant="body_2">
                  {t("within_2_4_hours")}
                </Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("within_1_2_days")}</Typography>
              </td>
              <td>
                <Typography variant="body_4">{t("same_day")}</Typography>
                <Typography variant="body_2">{t("within_2_hours")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("within_1_3_days")}</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                <DollarIcon /> {t("prices")}
              </Typography>
              <td>
                <Typography variant="body_4">{t("starting_from")}</Typography>
                <Typography variant="body_2">{t("from_2000_dram")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("free")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("1500_dram")}</Typography>
              </td>
              <td>
                <Typography variant="body_2">{t("700_dram")}</Typography>
              </td>
            </tr>
            <tr>
              <Typography as="th" variant="h4" scope="row">
                {t("special_notes")}
              </Typography>
              <td>
                <Typography variant="body_2">-</Typography>
              </td>
              <td>
                <Typography variant="body_4">{t("exception")}</Typography>
                <Typography variant="body_2">{t("cement_gypsum")}</Typography>
              </td>
              <td>
                <Typography variant="body_4">{t("weight_limit")}</Typography>
                <Typography variant="body_2">{t("up_to_10kg")}</Typography>
              </td>
              <td>
                <Typography variant="body_4">{t("weight_limit")}</Typography>
                <Typography variant="body_2">{t("up_to_5kg")}</Typography>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <TableDelliveryMobile />
      )}
    </div>
  );
};
