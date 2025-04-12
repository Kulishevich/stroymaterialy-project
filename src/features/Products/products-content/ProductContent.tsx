import React from "react";
import s from "./ProductsContent.module.scss";
import { Item } from "@/components/item";
import { ProductsData } from "@/api/products/products.types";
import { Pagination } from "@/components/ui/pagination";

type ProductContentProps = {
  products: ProductsData;
  page: string;
};

export const ProductContent = ({ products, page }: ProductContentProps) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        {products &&
          products.data.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </div>
      <Pagination
        totalPages={String(products?.meta.last_page)}
        currentPage={page}
      />
    </div>
  );
};
