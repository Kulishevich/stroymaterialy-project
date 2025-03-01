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
    <CategoryPage
      categories={categories}
      bestSellingProducts={bestSellingProducts}
      breadcrumbs={breadcrumbs}
    />
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
