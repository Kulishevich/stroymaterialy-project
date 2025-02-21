import React from "react";
import s from "./OtherCompanyShares.module.scss";
import { Typography } from "../ui/typography";
import { Discount } from "../discount";
import { Button } from "../ui/button";
import { useGetContentQuery } from "@/api/content/content.api";

export const OtherCompanyShares = () => {
  const { data: content } = useGetContentQuery("discounts");

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Другие акции компании
      </Typography>
      <div className={s.content}>
        {content?.data.slice(0, 2).map((discount, index) => (
          <Discount key={index + discount.key} discount={discount} />
        ))}
      </div>
      <Button>Все акции</Button>
    </div>
  );
};
