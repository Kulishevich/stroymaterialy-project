import React from "react";
import { CompanyContacts } from "@/components/company-contacts";
import { FeedbackForm } from "@/components/feedback-form";
import s from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  return (
    <div className={s.container}>
      <CompanyContacts variant="secondary" />
      <FeedbackForm />
    </div>
  );
};
