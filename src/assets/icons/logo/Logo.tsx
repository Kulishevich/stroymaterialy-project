import React from "react";
import { LogoIcon } from "..";
import { Typography } from "@/components/ui/typography";
import s from "./Logo.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Paths } from "@/shared/enums";

export type LogoProps = {
  variant?: "dark" | "light";
};

export const Logo = ({ variant = "light" }: LogoProps) => {
  return (
    <Link className={s.main} href={Paths.home}>
      <LogoIcon />
      <Typography variant="h1" as="h1" className={clsx(s[variant], s.text)}>
        DOMIX
      </Typography>
    </Link>
  );
};
