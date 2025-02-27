import React, { useEffect } from "react";
import { CategoryTags } from "@/features/Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import s from "./SubcategoryPage.module.scss";
import { useGetBreadcrumbsCategoriesQuery } from "@/api/categories/categories.api";
import { useRouter } from "next/router";
import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";

export const SubcategoryPage = ({
  subcategories,
  bestSellingProducts,
}: {
  subcategories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { subcategory } = router.query;
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
      <CategoryTags
        title={breadcrumbs?.data.name ?? ""}
        categories={subcategories.data}
      />
      <BestSellingProducts bestSellingProducts={bestSellingProducts} />
    </div>
  );
};
