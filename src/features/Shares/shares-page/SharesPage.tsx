// import { FeedbackForm } from "@/components/feedback-form";
import { Shares } from "@/features/Shares/shares";
import React from "react";
import s from "./SharesPage.module.scss";
import { ContentResponse } from "@/api/content/content.types";

export const SharesPage = ({ content }: { content: ContentResponse }) => {
  return (
    <div className={s.container}>
      <Shares content={content} />
      {/* <FeedbackForm /> */}
    </div>
  );
};
