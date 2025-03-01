import { Product } from "@/api/products/products.types";
import { ProductPage } from "@/features/Product/product-page";
import { getProduct } from "@/ssr-api/getProduct";
import { GetServerSideProps } from "next";

export default function ProductPageDynamic({
  productItem,
}: {
  productItem: { data: Product };
}) {
  return <ProductPage product={productItem} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product } = context.params as { product: string };
  const lang = context.req.cookies?.locale || "hy";

  const productItem = await getProduct({ product, lang });

  return { props: { productItem } };
};
