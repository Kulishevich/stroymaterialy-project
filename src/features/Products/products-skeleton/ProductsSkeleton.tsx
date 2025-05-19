import React from "react";
import s from "./ProductsSkeleton.module.scss";

export const ProductsSkeleton = () => {
  return (
    <div className={s.page}>
      <aside className={s.sidebar}>
        <div className={s.sidebarBlock}></div>
        <div className={s.sidebarBlock}></div>
        <div className={s.sidebarBlock}></div>
        <div className={s.sidebarBlock}></div>
        <div className={s.sidebarBlock}></div>
        <div className={s.sidebarBlock}></div>
      </aside>
      <div className={s.grid}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={s.card}>
            <div className={s.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
