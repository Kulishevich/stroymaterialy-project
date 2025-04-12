import React from "react";
import { CategoryTags } from "../category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import {
  CategoriesBreadcrumbs,
  CategoryArgs,
} from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import s from "./CategoryPage.module.scss";

export const CategoryPage = ({
  categories,
  bestSellingProducts,
  breadcrumbs,
}: {
  categories: { data: CategoryArgs[] } | undefined;
  bestSellingProducts: { data: Product[] } | undefined;
  breadcrumbs: { data: CategoriesBreadcrumbs } | undefined;
}) => {
  return (
    <div className={s.container}>
      {categories && breadcrumbs && (
        <CategoryTags
          title={breadcrumbs.data.name}
          categories={categories.data}
        />
      )}
      {!!bestSellingProducts && (
        <BestSellingProducts bestSellingProducts={bestSellingProducts} />
      )}
    </div>
  );
};
