import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./TableLifting.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { TableLiftingMobile } from "./table-lifting-mobile";

export const TableLifting = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.tableContainer}>
      <Typography variant="h3" as="h3">
        Стоимость подъёма
      </Typography>
      {!isMobile ? (
        <table className={s.tablePayment}>
          <thead>
            <tr>
              <Typography as="th" variant={"body_3"} scope="row">
                Вид груза
              </Typography>
              <Typography variant={"body_3"} as="td">
                кг / штук
              </Typography>
              <Typography variant={"body_3"} as="td">
                цена
              </Typography>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                1 мешок
              </Typography>
              <Typography variant={"body_2"} as="td">
                25-50 кг
              </Typography>
              <Typography variant={"body_2"} as="td">
                100 драм/ этаж
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                Гипсокартон
              </Typography>
              <Typography variant={"body_2"} as="td">
                1200x2400 мм
              </Typography>
              <Typography variant={"body_2"} as="td">
                150 драм/ этаж
              </Typography>
            </tr>
            <tr>
              <Typography as="th" variant={"h4"} scope="row">
                Профили
              </Typography>
              <Typography variant={"body_2"} as="td">
                20 штук
              </Typography>
              <Typography variant={"body_2"} as="td">
                150 драм/ этаж
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
