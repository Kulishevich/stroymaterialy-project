import React from "react";
import s from "./LatestCompanyPromotions.module.scss";
import { Typography } from "../../../components/ui/typography";
import { Discount } from "../../../components/discount";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const LatestCompanyPromotions = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        Последние акции компании
      </Typography>
      <div className={s.bannersContainer}>
        <Discount />
        <Discount />
      </div>
      {isMobile && <Button>Все акции</Button>}
    </div>
  );
};
