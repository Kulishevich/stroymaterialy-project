import React from "react";
import s from "./SharesInfo.module.scss";
import { Typography } from "../../shared/ui/typography";
import Image from "next/image";
import { Button } from "../../shared/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const SharesInfo = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Скидка 15% на всю продукцию Orio!
      </Typography>
      <Typography variant="body_5">01 декабря-31 декабря 2024</Typography>
      <div className={s.content}>
        <div className={s.text}>
          <Typography variant="body_1">
            Только онлайн! Оформите заказ на приобретение любого товара
            из продукции Orio и получите скидку в размере 20%! В акции участвуют
            все товары, представленные на нашем сайте. Не упустите возможность
            сэкономить на покупках и воспользуйтесь этой уникальной возможностью
            с 01 по 31 декабря 2024 года. Акция ограничена, поэтому торопитесь,
            чтобы не пропустить выгодное предложение!
          </Typography>
          {!isMobile && <Button variant={"secondary"}>В каталог</Button>}
        </div>
        <Image
          src={"/images/middle-banner.png"}
          width={!isMobile ? 636 : 336}
          height={!isMobile ? 260 : 180}
          alt="banner"
        />
      </div>
    </div>
  );
};
