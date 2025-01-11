import React from "react";
import { LogoIcon } from "../icons";
import { Typography } from "@/components/ui/typography";
import s from "./Logo.module.scss";
import clsx from "clsx";

export type LogoProps = {
  variant?: "dark" | "light";
};

export const Logo = ({ variant = "light" }: LogoProps) => {
  return (
    <div className={s.main}>
      <LogoIcon />
      <Typography variant="h1" as="h1" className={clsx(s[variant], s.text)}>
        DOMIX
      </Typography>
    </div>
  );
};
