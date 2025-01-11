import React from "react";
import s from "./Header.module.scss";
import { HeaderNavigation } from "./header-navigation";
import { HeaderInfo } from "./header-info";
import { HeaderSearch } from "./header-search";

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <HeaderNavigation />
      <HeaderInfo />
      <HeaderSearch />
    </div>
  );
};
