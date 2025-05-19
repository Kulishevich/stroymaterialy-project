import React from "react";
import s from "./ProductSkeleton.module.scss";

export const ProductSkeleton = () => {
  return (
    <div className={s.container}>
      <div className={s.imageBlock}></div>

      <div className={s.infoBlock}>
        <div className={s.title}></div>
        <div className={s.specs}></div>
        <div className={s.specs}></div>
        <div className={s.price}></div>

        <div className={s.specs}></div>
        <div className={s.specs}></div>
        <div className={s.price}></div>

        <div className={s.buttons}>
          <div className={s.button}></div>
          <div className={s.button}></div>
        </div>
        <div className={s.price}></div>
        <div className={s.description}></div>
        <div className={s.description}></div>
        <div className={s.description}></div>
        <div className={s.price}></div>

        <div className={s.description}></div>
        <div className={s.description}></div>
        <div className={s.description}></div>
        <div className={s.price}></div>

        <div className={s.description}></div>
        <div className={s.description}></div>
      </div>
    </div>
  );
};
