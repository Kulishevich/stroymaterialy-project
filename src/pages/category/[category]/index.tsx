import { CategoryPage } from "@/features/Category/category-page";
import { getBreadcrumbs } from "@/new-api/getBreadcrumbs";
import { getCategories } from "@/new-api/getCategories";
import { getTrendsProduct } from "@/new-api/getTrendsProduct";
import { GetServerSideProps } from "next";

export default function CategoryPageDynamic({
  categories,
  breadcrumbs,
  bestSellingProducts,
}) {
  return (
    <CategoryPage
      categories={categories}
      breadcrumbs={breadcrumbs}
      bestSellingProducts={bestSellingProducts}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params as { category: string };

  const categories = await getCategories({ category: category, perPage: 20 });
  const breadcrumbs = await getBreadcrumbs(category);
  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
  });

  return {
    props: { categories, breadcrumbs, bestSellingProducts },
  };
};
