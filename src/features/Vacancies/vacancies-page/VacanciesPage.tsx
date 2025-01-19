import React from "react";
import { VacancieBanner } from "@/components/vacancie-banner";
import { ReasonsCards } from "@/components/reasons-cards";
import { MastersClub } from "@/components/masters-club";
import { FeedbackForm } from "@/components/feedback-form";
import s from "./VacanciesPage.module.scss";

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
