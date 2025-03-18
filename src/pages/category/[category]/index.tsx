import {
  CategoriesBreadcrumbs,
  CategoryArgs,
} from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import { CategoryPage } from "@/features/Category/category-page";
import { getBreadcrumbs } from "@/ssr-api/getBreadcrumbs";
import { getCategories } from "@/ssr-api/getCategories";
import { getTrendsProduct } from "@/ssr-api/getTrendsProduct";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function CategoryPageDynamic({
  categories,
  bestSellingProducts,
  breadcrumbs,
}: {
  categories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
  breadcrumbs: { data: CategoriesBreadcrumbs };
}) {
  return (
    <>
      <Head>
        <title>
          {breadcrumbs.data.name ||
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
            breadcrumbs.data.name ||
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params as { category: string };
  const lang = context.req.cookies?.locale || "hy";

  const categories = await getCategories({
    category: category,
    perPage: 20,
    lang,
  });
  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
    lang,
  });

  const breadcrumbs = await getBreadcrumbs({
    category,
    lang,
  });

  return {
    props: { categories, bestSellingProducts, breadcrumbs },
  };
};
