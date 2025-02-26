import { FeedbackForm } from "@/components/feedback-form";
import { Shares } from "@/features/Shares/shares";
import React from "react";
import s from "./SharesPage.module.scss";

export const SharesPage = () => {
  return (
    <div className={s.container}>
      <Shares />
      <FeedbackForm />
    </div>
  );
};
