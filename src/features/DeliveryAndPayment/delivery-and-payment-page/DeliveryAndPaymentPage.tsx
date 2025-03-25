import { DeliveryAndPayment } from "@/features/DeliveryAndPayment/delivery-and-payment";
// import { FeedbackForm } from "@/components/feedback-form";
import React from "react";
import s from "./DeliveryAndPaymentPage.module.scss";

export const DeliveryAndPaymentPage = () => {
  return (
    <div className={s.container}>
      <DeliveryAndPayment />
      {/* <FeedbackForm /> */}
    </div>
  );
};
