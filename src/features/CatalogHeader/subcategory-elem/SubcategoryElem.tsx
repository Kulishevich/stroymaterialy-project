import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";
import { Typography } from "@/shared/ui/typography";
import { RootState } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type SubcategoryElemProps = {
  id: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubcategoryElem = ({ id, setIsOpen }: SubcategoryElemProps) => {
  const lang = useSelector((state: RootState) => state.lang);

  const { data: subCategories } = useGetSubCategoriesQuery({
    id: id,
    perPage: 20,
    lang,
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
