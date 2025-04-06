import { Product } from "@/api/products/products.types";
import { ProductPage } from "@/features/Product/product-page";
import { getProduct } from "@/ssr-api/getProduct";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function ProductPageDynamic({
  productItem,
}: {
  productItem: { data: Product };
}) {
  return (
    <>
      <Head>
        <title>
          {productItem.data.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"}
        </title>
        <meta
          name="description"
          content={
            productItem.data.description ||
            "Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={
            productItem.data.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"
          }
        />
        <meta
          property="og:description"
          content={
            productItem.data.description ||
            "Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
          }
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ProductPage product={productItem} />
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
  const { product } = context.params as { product: string };

  const productItem = await getProduct({ product, lang });

  return { props: { productItem }, revalidate: 3600 };
};
