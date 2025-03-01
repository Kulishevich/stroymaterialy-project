import React, { useEffect } from "react";
import { CategoryTags } from "@/features/Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import {
  CategoriesBreadcrumbs,
  CategoryArgs,
} from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import s from "./SubcategoryPage.module.scss";

export const SubcategoryPage = ({
  subcategories,
  bestSellingProducts,
  breadcrumbs,
}: {
  subcategories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
  breadcrumbs: { data: CategoriesBreadcrumbs };
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  return (
    <div className={s.container}>
      <CategoryTags
        title={breadcrumbs?.data.name ?? ""}
        categories={subcategories.data}
      />
      <BestSellingProducts bestSellingProducts={bestSellingProducts} />
    </div>
  );
};
