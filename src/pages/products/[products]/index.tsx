import { CategoriesBreadcrumbs } from "@/api/categories/categories.types";
import { ContentItem } from "@/api/content/content.types";
import { ResponseProductsByCategory } from "@/api/products/products.types";
import { ProductsPage } from "@/features/Products/products-page";
import { getBreadcrumbs } from "@/ssr-api/getBreadcrumbs";
import { getContent } from "@/ssr-api/getContent";
import { getProductsList } from "@/ssr-api/getProductsList";
import { GetServerSideProps } from "next";

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
    <ProductsPage
      productsList={productsList}
      breadcrumbs={breadcrumbs}
      secondBanner={secondBanner}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies?.locale || "hy";
  const { products, page = "1" } = context.query;

  const productsList = await getProductsList({
    id: products as string,
    perPage: 12,
    page: Number(page),
    lang,
  });

  const breadcrumbs = await getBreadcrumbs({
    category: products as string,
    lang,
  });

  const { data } = await getContent({ lang, key: "secondBanner" });

  return { props: { productsList, breadcrumbs, secondBanner: data } };
};
