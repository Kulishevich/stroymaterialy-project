import React from "react";
import s from "./DeliveryAndLifting.module.scss";
import { TableDelivery } from "./table-dellivery";
import { TableLifting } from "./table-lifting";

export const DeliveryAndLifting = () => {
  return (
    <div className={s.tablesContainer}>
      <TableDelivery />
      <TableLifting />
    </div>
  );
};
