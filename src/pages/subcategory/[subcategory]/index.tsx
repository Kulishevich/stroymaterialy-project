import { SubcategoryPage } from "@/features/Subcategory/subcategory-page";
import { getBreadcrumbs } from "@/new-api/getBreadcrumbs";
import { getSubcategories } from "@/new-api/getSubcategories";
import { getTrendsProduct } from "@/new-api/getTrendsProduct";
import { GetServerSideProps } from "next";

export default function SubcategoryPageDynamic({
  subcategories,
  breadcrumbs,
  bestSellingProducts,
}) {
  return (
    <SubcategoryPage
      subcategories={subcategories}
      breadcrumbs={breadcrumbs}
      bestSellingProducts={bestSellingProducts}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subcategory } = context.params as { subcategory: string };

  const subcategories = await getSubcategories({
    subcategory: subcategory,
    perPage: 20,
  });
  const breadcrumbs = await getBreadcrumbs(subcategory);
  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
  });

  return {
    props: { subcategories, breadcrumbs, bestSellingProducts },
  };
};
