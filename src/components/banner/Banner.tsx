import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const Banner = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Image
        src={"/images/big-banner.png"}
        width={!isMobile ? 1296 : 336}
        height={!isMobile ? 320 : 210}
        alt="big banner"
        className={s.image}
      />
      <Button className={s.button}>В каталог</Button>
    </div>
  );
};
