import React from "react";
import { BusinessBanner } from "@/components/business-banner";
import { BenefitsOfWorking } from "@/components/benefits-of-working";
import { WorkProcess } from "@/components/work-process";
import { Services } from "@/components/services";
// import { FeedbackForm } from "@/components/feedback-form";
import s from "./ForBusinessPage.module.scss";

export const ForBusinessPage = () => {
  return (
    <div className={s.container}>
      <BusinessBanner />
      <BenefitsOfWorking />
      <WorkProcess />
      <Services />
      {/* <FeedbackForm /> */}
    </div>
  );
};
