import React, { useEffect } from "react";
import { useRouter } from "next/router";
import s from "./CategoryPage.module.scss";
import { CategoryTags } from "../category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import {
  useGetBreadcrumbsCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/api/categories/categories.api";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";

export const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (!category || typeof category !== "string") {
        router.push("/404");
      }
    }
  }, [category, router.isReady, router]);

  const { data: subcategories, isLoading } = useGetSubCategoriesQuery({
    id: category as string,
    perPage: 20,
  });

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery(
    category as string
  );

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  console.log(breadcrumbs);
  console.log("CategoryPage", subcategories);
  return (
    <div className={s.container}>
      {!isLoading && subcategories && breadcrumbs && (
        <CategoryTags
          title={breadcrumbs.data.name}
          categories={subcategories.data}
        />
      )}
      <BestSellingProducts />
    </div>
  );
};
