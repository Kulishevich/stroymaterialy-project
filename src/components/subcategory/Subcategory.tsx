import Image from "next/image";
import React from "react";
import { Typography } from "../../shared/ui/typography";
import Link from "next/link";
import { CategoryArgs } from "@/api/categories/categories.types";
import s from "./Subcategory.module.scss";

type SubcategoryProps = {
  category: CategoryArgs;
};

export const Subcategory = ({ category }: SubcategoryProps) => {
  return (
    <Link
      href={
        category.subcategoriesCount === 0
          ? `/products/${category.id}`
          : `/category/${category.id}`
      }
      className={s.card}
    >
      <div className={s.imageContainer}>
        <Image src={category?.image || ""} fill alt="Subcategory" />
      </div>
      <Typography variant="body_5">{category.name}</Typography>
    </Link>
  );
};
