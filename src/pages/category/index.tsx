import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import { Catalog } from "@/features/Catalog";
import { getSimpleCategories } from "@/ssr-api/getSimpleCategories";
import { getTrendsProduct } from "@/ssr-api/getTrendsProduct";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function CategoryPage({
  categories,
  bestSellingProducts,
}: {
  categories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
}) {
  return (
    <>
      <Head>
        <title>
          Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой
        </title>
        <meta
          name="description"
          content="Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Domix.am - крупнейший магазин стройматериалов в Армении"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Catalog
          categories={categories}
          bestSellingProducts={bestSellingProducts}
        />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";

  const categories = await getSimpleCategories({
    lang,
  });

  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
    lang,
  });

  return {
    props: { categories, bestSellingProducts },
  };
};
