import React from "react";
import s from "./ProductsContent.module.scss";
import { Item } from "@/components/item";
import { Product } from "@/api/products/products.types";

type ProductContentProps = {
  products: Product[];
};

export const ProductContent = ({ products }: ProductContentProps) => {
  return (
    <div className={s.container}>
      {products &&
        products.map((product) => <Item product={product} key={product.id} />)}
    </div>
  );
};
