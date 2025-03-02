import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import { Catalog } from "@/features/Catalog";
import { getSimpleCategories } from "@/ssr-api/getSimpleCategories";
import { getTrendsProduct } from "@/ssr-api/getTrendsProduct";
import { GetServerSideProps } from "next";

export default function CategoryPage({
  categories,
  bestSellingProducts,
}: {
  categories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
}) {
  return (
    <Catalog
      categories={categories}
      bestSellingProducts={bestSellingProducts}
    />
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
