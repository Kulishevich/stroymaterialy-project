import React, { useEffect } from "react";
import s from "./CategoryPage.module.scss";
import { CategoryTags } from "../category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";

export const CategoryPage = ({
  categories,
  breadcrumbs,
  bestSellingProducts,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  return (
    <div className={s.container}>
      {categories && breadcrumbs && (
        <CategoryTags
          title={breadcrumbs.data.name}
          categories={categories.data}
        />
      )}
      <BestSellingProducts bestSellingProducts={bestSellingProducts} />
    </div>
  );
};
