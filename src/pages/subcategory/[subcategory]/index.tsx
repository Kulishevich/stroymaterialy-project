import {
  CategoriesBreadcrumbs,
  CategoryArgs,
} from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";
import { SubcategoryPage } from "@/features/Subcategory/subcategory-page";
import { getBreadcrumbs } from "@/ssr-api/getBreadcrumbs";
import { getSubcategories } from "@/ssr-api/getSubcategories";
import { getTrendsProduct } from "@/ssr-api/getTrendsProduct";
import { GetServerSideProps } from "next";

export default function SubcategoryPageDynamic({
  subcategories,
  bestSellingProducts,
  breadcrumbs,
}: {
  subcategories: { data: CategoryArgs[] };
  bestSellingProducts: { data: Product[] };
  breadcrumbs: { data: CategoriesBreadcrumbs };
}) {
  return (
    <SubcategoryPage
      subcategories={subcategories}
      bestSellingProducts={bestSellingProducts}
      breadcrumbs={breadcrumbs}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subcategory } = context.params as { subcategory: string };
  const lang = context.req.cookies?.locale || "hy";

  const subcategories = await getSubcategories({
    subcategory: subcategory,
    perPage: 18,
    lang,
  });

  const breadcrumbs = await getBreadcrumbs({ category: subcategory, lang });

  const bestSellingProducts = await getTrendsProduct({
    trend: "popular",
    perPage: 12,
    lang,
  });

  return {
    props: { subcategories, breadcrumbs, bestSellingProducts },
  };
};
