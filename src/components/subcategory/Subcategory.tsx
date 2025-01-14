import Image from "next/image";
import React from "react";
import { Typography } from "../ui/typography";
import s from "./Subcategory.module.scss";
import clsx from "clsx";

type SubcategoryProps = {
  variant?: "light" | "orange";
  image: string;
  value: string;
};

export const Subcategory = ({
  variant = "light",
  image,
  value,
}: SubcategoryProps) => {
  return (
    <div className={clsx(s.card, variant === "light" ? s.light : s.orange)}>
      <Image src={image} width={160} height={122} alt="Subcategory" />
      <Typography variant="body_5">{value}</Typography>
    </div>
  );
};
