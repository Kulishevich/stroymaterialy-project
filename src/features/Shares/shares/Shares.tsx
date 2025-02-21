import React from "react";
import s from "./Shares.module.scss";
import { Typography } from "../../../components/ui/typography";
import { Discount } from "../../../components/discount";
import { useGetContentQuery } from "@/api/content/content.api";

export const Shares = () => {
  const { data: content } = useGetContentQuery("discounts");
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
