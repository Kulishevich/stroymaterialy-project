import React from "react";
import s from "./CategoryTags.module.scss";
import { Subcategory } from "@/components/subcategory";
import { Typography } from "@/shared/ui/typography";
import { CategoryArgs } from "@/api/categories/categories.types";

type CategoryTagsProps = {
  title: string;
  categories: CategoryArgs[];
};

export const CategoryTags = ({ title, categories }: CategoryTagsProps) => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {title}
      </Typography>
      <div className={s.categoryContainer}>
        {categories.map((category) => (
          <Subcategory category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
