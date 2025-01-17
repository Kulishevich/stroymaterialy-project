import React from "react";
import { Rubik, Onest } from "next/font/google";
import clsx from "clsx";

const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const onestFont = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const LayoutFonts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx(rubikFont.variable, onestFont.variable)}>
      {children}
    </div>
  );
};
