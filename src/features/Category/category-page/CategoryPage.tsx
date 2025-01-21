import React, { useEffect } from "react";
import { useRouter } from "next/router";
import s from "./CategoryPage.module.scss";
import { CategoryTags } from "../category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";

export const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (!category || typeof category !== "string") {
        router.push("/404");
      }
    }
  }, [category, router.isReady, router]);

  const { data: subcategories, isLoading } = useGetSubCategoriesQuery({
    id: category as string,
    perPage: 20,
  });

  console.log("CategoryPage", subcategories);
  return (
    <div className={s.container}>
      {!isLoading && subcategories && (
        <CategoryTags
          title={"Материалы, используемые в бытовых и строительных работах"}
          categories={subcategories.data}
        />
      )}
      <BestSellingProducts />
    </div>
  );
};
