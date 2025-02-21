import React, { useEffect, useState } from "react";
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
import { Typography } from "@/components/ui/typography";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useSearchParams } from "next/navigation";
import FilterMobile from "@/components/filter-mobile/FilterMobile";

export const ProductsPage = () => {
  const [activeFilters, setActiveFilters] = useState("");
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const isMobile = useIsMobile("tablet");
  const router = useRouter();
  const { products } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const filtersString = searchParams.toString();

    if (!filtersString) {
      setActiveFilters("");
      return;
    }

    setActiveFilters(
      filtersString
        .split("&")
        .filter(Boolean)
        .map((item) => "&" + item)
        .join("")
    );
  }, [searchParams]);

  useEffect(() => {
    if (router.isReady) {
      if (!products || typeof products !== "string") {
        router.push("/404");
      }
    }
  }, [products, router.isReady, router]);

  const { data: productsItems } = useGetProductsByCategoryQuery({
    id: products as string,
    perPage: 12,
    page: Number(page),
    filters: activeFilters,
  });

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery(
    products as string
  );

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch, page]);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography
          variant={!isMobile ? "h1" : "h2"}
          as={!isMobile ? "h1" : "h2"}
        >
          {breadcrumbs?.data.name}
        </Typography>
        <div className={s.products}>
          {!isMobile
            ? productsItems?.data.filters && (
                <ProductsFilter filtersData={productsItems?.data.filters} />
              )
            : productsItems?.data.filters && (
                <FilterMobile filtersData={productsItems?.data.filters} />
              )}
          {productsItems?.data.products.data && (
            <ProductContent
              products={productsItems?.data?.products}
              page={page}
            />
          )}
        </div>
      </div>
      <Banner />
      <FeedbackForm />
    </div>
  );
};
