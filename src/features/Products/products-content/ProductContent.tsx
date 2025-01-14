import React from "react";
import s from "./ProductsContent.module.scss";
import { Item } from "@/components/item";

export const ProductContent = () => {
  return (
    <div className={s.container}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};
