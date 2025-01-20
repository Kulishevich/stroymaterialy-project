import { FeedbackForm } from "@/components/feedback-form";
import { OtherCompanyShares } from "@/components/other-company-shares";
import { SharesInfo } from "@/components/shares-info";
import { useRouter } from "next/router";
import React from "react";
import s from "./ShareDetailPage.module.scss";

export const ShareDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div className={s.container}>
      <SharesInfo />
      <OtherCompanyShares />
      <FeedbackForm />
    </div>
  );
};
