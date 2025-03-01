import React from "react";
import s from "./AboutPage.module.scss";
import { Advantages } from "@/features/About/advantages";
import { Banner } from "@/components/banner";
import { LatestCompanyPromotions } from "@/features/About/latest-company-promotions";
import { FeedbackForm } from "@/components/feedback-form";
import { ContentItem } from "@/api/content/content.types";

export const AboutPage = ({
  discounts,
  secondBanner,
}: {
  discounts: ContentItem[];
  secondBanner: ContentItem[];
}) => {
  return (
    <div className={s.container}>
      <Advantages />
      <Banner secondBanner={secondBanner} />
      <LatestCompanyPromotions discounts={discounts} />
      <FeedbackForm />
    </div>
  );
};
