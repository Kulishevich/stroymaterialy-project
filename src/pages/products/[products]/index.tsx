import { CategoriesBreadcrumbs } from "@/api/categories/categories.types";
import { ContentItem } from "@/api/content/content.types";
import { ResponseProductsByCategory } from "@/api/products/products.types";
import { ProductsPage } from "@/features/Products/products-page";
import { getBreadcrumbs } from "@/ssr-api/getBreadcrumbs";
import { getContent } from "@/ssr-api/getContent";
import { getProductsList } from "@/ssr-api/getProductsList";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function ProductsPageDynamic({
  productsList,
  breadcrumbs,
  secondBanner,
}: {
  productsList: ResponseProductsByCategory;
  breadcrumbs: { data: CategoriesBreadcrumbs };
  secondBanner: ContentItem[];
}) {
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
          secondBanner={secondBanner}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const lang = context.locale || "hy";
  const id = context.params?.products;

  const productsList = await getProductsList({
    id: id as string,
    perPage: 12,
    page: 1,
    lang,
  });

  const breadcrumbs = await getBreadcrumbs({
    category: id as string,
    lang,
  });

  const { data } = await getContent({ lang, key: "secondBanner" });
  console.log(`/products/${id}`, !!productsList, !!breadcrumbs, !!data);
  return {
    props: { productsList, breadcrumbs, secondBanner: data },
    revalidate: 21600,
  };
};
