import React from "react";
import s from "./AboutPage.module.scss";
import { AboutUs } from "@/components/about-us";
import { Advantages } from "@/components/advantages";
import { Banner } from "@/components/banner";
import { LatestCompanyPromotions } from "@/components/latest-company-promotions";
import { FeedbackForm } from "@/components/feedback-form";

export const AboutPage = () => {
  return (
    <div className={s.container}>
      <AboutUs />
      <Advantages />
      <Banner />
      <LatestCompanyPromotions />
      <FeedbackForm />
    </div>
  );
};
