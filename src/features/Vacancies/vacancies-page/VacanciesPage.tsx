import React from "react";
import s from "./VacanciesPage.module.scss";
import { VacancieBanner } from "@/components/vacancie-banner";
import { ReasonsCards } from "@/components/reasons-cards";
import { MastersClub } from "@/components/masters-club";
import { FeedbackForm } from "@/components/feedback-form";

export const VacanciesPage = () => {
  return (
    <div className={s.container}>
      <VacancieBanner />
      <ReasonsCards />
      <MastersClub />
      <FeedbackForm />
    </div>
  );
};
