import {
  useGetBreadcrumbsCategoriesQuery,
  useGetSubCategoriesQuery,
} from "@/api/categories/categories.api";
import { useGetTrendsProductsQuery } from "@/api/products/products.api";
import { CategoryPage } from "@/features/Category/category-page";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { RootState } from "@/store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryPageDynamic() {
  const lang = useSelector((state: RootState) => state.lang);
  const { query } = useRouter();
  const dispatch = useDispatch();

  const { data: categories } = useGetSubCategoriesQuery({
    id: query.category as string,
    perPage: 20,
    lang,
  });

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery({
    id: query.category as string,
    lang,
  });

  const { data: bestSellingProducts } = useGetTrendsProductsQuery({
    trend: "popular",
    perPage: 12,
    lang,
  });

  useEffect(() => {
    if (breadcrumbs?.data.breadcrumb) {
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch]);

  return (
    <>
      <Head>
        <title>
          {breadcrumbs?.data?.name ??
            "Domix.am - крупнейший магазин стройматериалов в Армении"}
        </title>
        <meta
          name="description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={
            breadcrumbs?.data?.name ??
            "Domix.am - крупнейший магазин стройматериалов в Армении"
          }
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CategoryPage
          categories={categories}
          bestSellingProducts={bestSellingProducts}
          breadcrumbs={breadcrumbs}
        />
      </div>
    </>
  );
}
