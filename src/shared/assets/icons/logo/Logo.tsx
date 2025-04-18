import React from "react";
import { LogoIcon } from "..";
import { Typography } from "@/shared/ui/typography";
import s from "./Logo.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export type LogoProps = {
  variant?: "dark" | "light";
};

export const Logo = ({ variant = "light" }: LogoProps) => {
  const isMobile = useIsMobile("tablet");

  return (
    <Link className={s.main} href={Paths.home}>
      <LogoIcon width={!isMobile ? 58 : 34} height={!isMobile ? 45 : 27} />
      <Typography variant="h1" as="h1" className={clsx(s[variant], s.text)}>
        DOMIX
      </Typography>
    </Link>
  );
};
