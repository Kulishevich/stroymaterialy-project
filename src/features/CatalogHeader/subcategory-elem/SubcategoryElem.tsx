import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

type SubcategoryElemProps = {
  id: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubcategoryElem = ({ id, setIsOpen }: SubcategoryElemProps) => {
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
          onClick={() => setIsOpen(false)}
        >
          {subcategory.name}
        </Typography>
      ))}
    </ul>
  );
};
