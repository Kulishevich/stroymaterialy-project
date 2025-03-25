import React from "react";
import { VacancieBanner } from "@/components/vacancie-banner";
import { ReasonsCards } from "@/components/reasons-cards";
import { MastersClub } from "@/components/masters-club";
// import { FeedbackForm } from "@/components/feedback-form";
import s from "./VacanciesPage.module.scss";
import { ProfessionsArgs } from "@/api/professions/professions.types";
import { SpheresArgs } from "@/api/spheres/spheres.types";

export const VacanciesPage = ({
  professions,
  spheres,
}: {
  professions: { data: ProfessionsArgs[] };
  spheres: { data: SpheresArgs[] };
}) => {
  return (
    <div className={s.container}>
      <VacancieBanner />
      <ReasonsCards />
      <MastersClub professions={professions} spheres={spheres} />
      {/* <FeedbackForm /> */}
    </div>
  );
};
