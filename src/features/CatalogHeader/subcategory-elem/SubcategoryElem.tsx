import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

type SubcategoryElemProps = {
  id: string;
};

export const SubcategoryElem = ({ id }: SubcategoryElemProps) => {
  const { data: subCategories } = useGetSubCategoriesQuery({
    id: id,
    perPage: 20,
  });

  return (
    <ul>
      {subCategories?.data.map((subcategory) => (
        <Typography
          variant="body_3"
          as={Link}
          href={`/products/${subcategory.id}`}
          key={subcategory.id}
        >
          subcategory{subcategory.name}
        </Typography>
      ))}
    </ul>
  );
};
