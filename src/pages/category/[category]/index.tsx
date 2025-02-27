import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import { CategoryPage } from "@/features/Category/category-page";
import { getCategories } from "@/new-api/getCategories";
import { getTrendsProduct } from "@/new-api/getTrendsProduct";
import { GetServerSideProps } from "next";

export default function CategoryPageDynamic({
  categories,
  bestSellingProducts,
}: {
  categories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
}) {
  return (
    <CategoryPage
      categories={categories}
      bestSellingProducts={bestSellingProducts}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params as { category: string };

  const categories = await getCategories({ category: category, perPage: 20 });
  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
  });

  return {
    props: { categories, bestSellingProducts },
  };
};
