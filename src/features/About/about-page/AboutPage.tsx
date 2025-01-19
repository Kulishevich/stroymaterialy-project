import React from "react";
import s from "./AboutPage.module.scss";
import { Advantages } from "@/features/About/advantages";
import { Banner } from "@/components/banner";
import { LatestCompanyPromotions } from "@/features/About/latest-company-promotions";
import { FeedbackForm } from "@/components/feedback-form";

export const AboutPage = () => {
  return (
    <div className={s.container}>
      <Advantages />
      <Banner />
      <LatestCompanyPromotions />
      <FeedbackForm />
    </div>
  );
};
