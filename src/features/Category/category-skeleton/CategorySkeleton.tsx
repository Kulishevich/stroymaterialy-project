import React from "react";
import s from "./CategorySkeleton.module.scss";

export const CategorySkeleton = () => {
  return (
    <div className={s.grid}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={s.block}></div>
      ))}
    </div>
  );
};
