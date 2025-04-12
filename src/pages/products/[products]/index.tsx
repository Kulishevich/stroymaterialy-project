import { useGetBreadcrumbsCategoriesQuery } from "@/api/categories/categories.api";
import { useGetContentQuery } from "@/api/content/content.api";
import { useGetProductsByCategoryQuery } from "@/api/products/products.api";
import { ProductsPage } from "@/features/Products/products-page";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { RootState } from "@/store/store";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductsPageDynamic() {
  const lang = useSelector((state: RootState) => state.lang);
  const [activeFilters, setActiveFilters] = useState("");
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const router = useRouter();
  const { products } = router.query;
  const dispatch = useDispatch();

  const { data: productsList } = useGetProductsByCategoryQuery({
    id: products as string,
    perPage: 12,
    page: Number(page),
    filters: activeFilters,
    lang,
  });

  const { data: breadcrumbs } = useGetBreadcrumbsCategoriesQuery({
    id: products as string,
    lang,
  });

  const { data: secondBanner } = useGetContentQuery({ key: "services", lang });

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
      dispatch(setBreadcrumbs(breadcrumbs.data.breadcrumb));
    }
  }, [breadcrumbs, dispatch, page]);

  return (
    <>
      <Head>
        <title>
          {breadcrumbs?.data.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"}
        </title>
        <meta
          name="description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={
            breadcrumbs?.data.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"
          }
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ProductsPage
          productsList={productsList}
          breadcrumbs={breadcrumbs}
          secondBanner={secondBanner?.data}
          page={page}
        />
      </div>
    </>
  );
}
