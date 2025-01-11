import Image from "next/image";
import React from "react";
import s from "./FlagRussia.module.scss";

export const FlagRussia = () => {
  return (
    <div>
      <Image
        alt="flagRussia"
        src={"/images/flagRussia.png"}
        height={26}
        width={26}
        className={s.image}
      />
    </div>
  );
};
