import React, { useEffect } from "react";
import s from "./SubcategoryPage.module.scss";
import { CategoryTags } from "@/features/Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";
import { useRouter } from "next/router";
import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";

export const SubcategoryPage = () => {
  const router = useRouter();
  const { subcategory } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (!subcategory || typeof subcategory !== "string") {
        router.push("/404");
      }
    }
  }, [subcategory, router.isReady, router]);

  const { data: products, isLoading } = useGetSubCategoriesQuery({
    id: subcategory as string,
    perPage: 20,
  });

  console.log("SubcategoryPage:", products);

  return (
    <div className={s.container}>
      {!isLoading && products && (
        <CategoryTags
          title={"Скотч, изолента, клейкая лента"}
          categories={products.data}
        />
      )}
      <BestSellingProducts />
    </div>
  );
};
