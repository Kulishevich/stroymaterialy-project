import { CategoriesBreadcrumbs } from "@/api/categories/categories.types";
import { ResponseProductsByCategory } from "@/api/products/products.types";
import { ProductsPage } from "@/features/Products/products-page";
import { getBreadcrumbs } from "@/ssr-api/getBreadcrumbs";
import { getProductsList } from "@/ssr-api/getProductsList";
import { GetServerSideProps } from "next";

export default function ProductsPageDynamic({
  productsList,
  breadcrumbs,
}: {
  productsList: ResponseProductsByCategory;
  breadcrumbs: { data: CategoriesBreadcrumbs };
}) {
  return <ProductsPage productsList={productsList} breadcrumbs={breadcrumbs} />;
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

  return { props: { productsList, breadcrumbs } };
};
