import Head from "next/head";
import { HomePage } from "@/features/Home/home-page";
import { GetServerSideProps } from "next";
import { getAllContent } from "@/ssr-api/getContent";
import { ContentItem } from "@/api/content/content.types";
import { getSimpleCategories } from "@/ssr-api/getSimpleCategories";
import { CategoryArgs } from "@/api/categories/categories.types";
import { getTrendsProduct } from "@/ssr-api/getTrendsProduct";
import { Product } from "@/api/products/products.types";

export default function Home({
  discounts,
  banner,
  categories,
  products,
  secondBanner,
}: {
  discounts: ContentItem[];
  banner: ContentItem[];
  secondBanner: ContentItem[];
  categories: { data: CategoryArgs[] };
  products: { data: Product[] };
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
        {/* og tags */}
        <meta
          property="og:title"
          content="Domix.am - крупнейший магазин стройматериалов в Армении"
        />
        <meta
          property="og:description"
          content="Купить строительные материалы для ремонта и стройки в Domix.am. Быстрая доставка и низкие цены!"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <HomePage
          discounts={discounts}
          banner={banner}
          secondBanner={secondBanner}
          categories={categories}
          products={products}
        />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";

  const content = await getAllContent({ lang });
  const discounts = content.data.filter(
    (elem: ContentItem) => elem.key === "discounts"
  );
  const banner = content.data.filter(
    (elem: ContentItem) => elem.key === "firstBanner"
  );
  const secondBanner = content.data.filter(
    (elem: ContentItem) => elem.key === "secondBanner"
  );

  const categories = await getSimpleCategories({ lang });
  const products = await getTrendsProduct({
    lang,
    perPage: 12,
    trend: "popular",
  });

  return { props: { discounts, banner, categories, products, secondBanner } };
};
