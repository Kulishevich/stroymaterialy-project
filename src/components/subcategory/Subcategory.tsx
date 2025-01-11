import Image from "next/image";
import React from "react";
import { Typography } from "../ui/typography";
import s from "./Subcategory.module.scss";
import clsx from "clsx";

type SubcategoryProps = {
  variant?: "light" | "orange";
};

export const Subcategory = ({ variant = "light" }: SubcategoryProps) => {
  return (
    <div className={clsx(s.card, variant === "light" ? s.light : s.orange)}>
      <Image
        src={"/images/subcategory.png"}
        width={160}
        height={122}
        alt="Subcategory"
      />
      <Typography variant="body_5">Упаковочные и укрывные пленки</Typography>
    </div>
  );
};
