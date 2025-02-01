import React, { useEffect } from "react";
import s from "./ProductsPage.module.scss";
import { ProductsFilter } from "../products-filter";
import { ProductContent } from "../products-content";
import { FeedbackForm } from "@/components/feedback-form";
import { Banner } from "@/components/banner";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useGetProductsByCategoryQuery } from "@/api/products/products.api";
import { useGetBreadcrumbsCategoriesQuery } from "@/api/categories/categories.api";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";

export const ProductsPage = () => {
  const router = useRouter();
  const { products } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (!products || typeof products !== "string") {
        router.push("/404");
      }
    }
  }, [products, router.isReady, router]);

  const { data: productsItems, isLoading } = useGetProductsByCategoryQuery({
    id: products as string,
    perPage: 20,
  });

  if (!isLoading && productsItems) {
    console.log("Продукты:", productsItems);
  }

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery(
    products as string
  );

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.products}>
        {productsItems?.data.filters && (
          <ProductsFilter filters={productsItems?.data.filters} />
        )}
        {productsItems?.data.products.data && (
          <ProductContent products={productsItems?.data.products.data} />
        )}
      </div>
      <Banner />
      <FeedbackForm />
    </div>
  );
};
