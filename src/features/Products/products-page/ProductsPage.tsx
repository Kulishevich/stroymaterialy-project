import React, { useEffect, useState } from "react";
import s from "./ProductsPage.module.scss";
import { ProductsFilter } from "../products-filter";
import { ProductContent } from "../products-content";
// import { FeedbackForm } from "@/components/feedback-form";
import { Banner } from "@/components/banner";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useGetProductsByCategoryQuery } from "@/api/products/products.api";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { Typography } from "@/components/ui/typography";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useSearchParams } from "next/navigation";
import FilterMobile from "@/components/filter-mobile/FilterMobile";
import { ResponseProductsByCategory } from "@/api/products/products.types";
import { CategoriesBreadcrumbs } from "@/api/categories/categories.types";
import { ContentItem } from "@/api/content/content.types";

export const ProductsPage = ({
  productsList,
  breadcrumbs,
  secondBanner,
}: {
  productsList: ResponseProductsByCategory;
  breadcrumbs: { data: CategoriesBreadcrumbs };
  secondBanner: ContentItem[];
}) => {
  const [productsState, setProductsState] = useState(productsList);
  const [activeFilters, setActiveFilters] = useState("");
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const isMobile = useIsMobile("tablet");
  const router = useRouter();
  const { products } = router.query;
  const dispatch = useDispatch();

  const { data: productsItems } = useGetProductsByCategoryQuery(
    {
      id: products as string,
      perPage: 12,
      page: Number(page),
      filters: activeFilters,
    },
    {
      skip: !productsState,
    }
  );

  useEffect(() => {
    if (productsItems) {
      setProductsState(productsItems);
    }
  }, [productsItems]);

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
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(
        setBreadcrumbs(
          breadcrumbs.data.breadcrumb.map((elem, index) => ({
            ...elem,
            is_subcategory: index === breadcrumbs.data.breadcrumb.length - 1,
          }))
        )
      );
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
          {!isMobile ? (
            <ProductsFilter filtersData={productsList?.data.filters} />
          ) : (
            <FilterMobile filtersData={productsList?.data.filters} />
          )}
          <ProductContent
            products={productsState?.data?.products}
            page={page}
          />
        </div>
      </div>
      <Banner secondBanner={secondBanner} />
      {/* <FeedbackForm /> */}
    </div>
  );
};
