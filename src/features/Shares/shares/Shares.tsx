import React from "react";
import s from "./Shares.module.scss";
import { Typography } from "../../../shared/ui/typography";
import { Discount } from "../../../components/discount";
import { ContentResponse } from "@/api/content/content.types";

export const Shares = ({ content }: { content: ContentResponse }) => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Акции
      </Typography>
      <div className={s.sharesContainer}>
        {content?.data.map((discount, index) => (
          <Discount discount={discount} key={index + discount.key} />
        ))}
      </div>
    </div>
  );
};
