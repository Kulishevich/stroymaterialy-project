import React from "react";
import { CompanyContacts } from "@/components/company-contacts";
// import { FeedbackForm } from "@/components/feedback-form";
import s from "./ContactsPage.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const ContactsPage = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <CompanyContacts variant={!isMobile ? "secondary" : "primary"} />
      {/* <FeedbackForm /> */}
    </div>
  );
};
