import React from "react";
import s from "./Catalog.module.scss";
import { CategoryTags } from "../Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";

export const Catalog = ({
  categories,
  bestSellingProducts,
}: {
  categories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
}) => {
  return (
    <div className={s.container}>
      <CategoryTags title={"Каталог"} categories={categories.data} />
      <BestSellingProducts bestSellingProducts={bestSellingProducts} />
    </div>
  );
};
