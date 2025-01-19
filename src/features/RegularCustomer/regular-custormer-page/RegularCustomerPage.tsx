import React from "react";
import { RegularCustomerContent } from "../regular-customer-content";
import { FeedbackForm } from "@/components/feedback-form";
import s from "./RegularCustomerPage.module.scss";

export const RegularCustomerPage = () => {
  return (
    <div className={s.container}>
      <RegularCustomerContent />
      <FeedbackForm />
    </div>
  );
};
