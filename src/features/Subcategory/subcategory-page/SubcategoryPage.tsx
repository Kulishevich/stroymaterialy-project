import React, { useEffect } from "react";
import s from "./SubcategoryPage.module.scss";
import { CategoryTags } from "@/features/Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useRouter } from "next/router";
import {
  useGetBreadcrumbsCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/api/categories/categories.api";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";

export const SubcategoryPage = () => {
  const router = useRouter();
  const { subcategory } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (!subcategory || typeof subcategory !== "string") {
        router.push("/404");
      }
    }
  }, [subcategory, router.isReady, router]);

  const { data: products, isLoading } = useGetSubCategoriesQuery({
    id: subcategory as string,
    perPage: 20,
  });

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery(
    subcategory as string
  );

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  return (
    <div className={s.container}>
      {!isLoading && products && breadcrumbs && (
        <CategoryTags
          title={breadcrumbs.data.name}
          categories={products.data}
        />
      )}
      <BestSellingProducts />
    </div>
  );
};
