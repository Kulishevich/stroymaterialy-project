import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/shared/assets/icons";
import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import s from "./CatalogHome.module.scss";
import { CategoryArgs } from "@/api/categories/categories.types";

export const CatalogHome = ({
  categories,
}: {
  categories: { data: CategoryArgs[] };
}) => {
  return (
    <div className={s.container}>
      <div className={s.navigate}>
        {categories &&
          categories.data.map((category) => (
            <Typography
              as={Link}
              href={`/${
                category.subcategoriesCount !== 0 ? "category" : "products"
              }/${category.id}`}
              className={clsx(s.category)}
              key={category.id}
            >
              <Image
                src={category.image}
                width={36}
                height={36}
                alt="category"
                className={s.imageCategory}
              />
              <Typography variant="body_4">{category.name}</Typography>
              <ArrowRightIcon className={s.iconCategory} />
            </Typography>
          ))}
      </div>
    </div>
  );
};
