import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <div className={s.container}>
      <Image
        src={"/images/big-banner.png"}
        width={1296}
        height={320}
        alt="big banner"
      />
      <Button className={s.button}>В каталог</Button>
    </div>
  );
};
