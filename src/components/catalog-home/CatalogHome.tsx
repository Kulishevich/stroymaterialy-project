import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import clsx from "clsx";
import { Typography } from "@/components/ui/typography";
import { useGetCategoriesQuery } from "@/api/categories/categories.api";
import Link from "next/link";
import s from "./CatalogHome.module.scss";

export const CatalogHome = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <div className={s.container}>
      <div className={s.navigate}>
        {!isLoading &&
          categories &&
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
