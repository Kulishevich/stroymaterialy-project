import Image from "next/image";
import React from "react";
import { Typography } from "../ui/typography";
import s from "./Subcategory.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { CategoryTag } from "@/features/Category/category-tags/CategoryTags";

type SubcategoryProps = {
  variant?: "light" | "orange";
  category: CategoryTag;
};

export const Subcategory = ({
  variant = "light",
  category,
}: SubcategoryProps) => {
  return (
    <Link
      href={
        category.subcategoriesCount === 0
          ? `/products/${category.id}`
          : `/subcategory/${category.id}`
      }
      className={clsx(s.card, variant === "light" ? s.light : s.orange)}
    >
      <Image src={category.image} width={160} height={122} alt="Subcategory" />
      <Typography variant="body_5">{category.name}</Typography>
    </Link>
  );
};
