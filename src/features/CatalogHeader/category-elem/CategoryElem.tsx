import { Typography } from "@/shared/ui/typography";
import React from "react";
import s from "./CategoryElem.module.scss";
import { CategoryArgs } from "@/api/categories/categories.types";
import Link from "next/link";
import { SubcategoryElem } from "../subcategory-elem";

type CategoryElemProps = {
  category: CategoryArgs;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CategoryElem = ({ category, setIsOpen }: CategoryElemProps) => {
  const isSubcategories = category.subcategoriesCount !== 0;

  return (
    <div className={s.elem}>
      <Typography
        variant="body_5"
        as={Link}
        href={`/${isSubcategories ? "category" : "products"}/${category.id}`}
        onClick={() => setIsOpen(false)}
      >
        {category.name}
      </Typography>
      {isSubcategories && (
        <SubcategoryElem id={category.id} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};
