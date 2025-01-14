import React from "react";
import s from "./CategoryTags.module.scss";
import { Subcategory } from "@/components/subcategory";
import { Typography } from "@/components/ui/typography";

type CategoryTagsProps = {
  title: string;
  tags: any[];
};

export const CategoryTags = ({ title, tags }: CategoryTagsProps) => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {title}
      </Typography>
      <div className={s.categoryContainer}>
        {tags.map((tag) => (
          <Subcategory image={tag.image} key={tag.id} value={tag.value} />
        ))}
      </div>
    </div>
  );
};
