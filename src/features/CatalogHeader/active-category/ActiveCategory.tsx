import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./ActiveCategory.module.scss";
import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";
import { CategoryElem } from "../category-elem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type ActiveCategoryProps = {
  id: string;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ActiveCategory = ({
  id,
  title,
  setIsOpen,
}: ActiveCategoryProps) => {
  const lang = useSelector((state: RootState) => state.lang);

  const { data: categories } = useGetSubCategoriesQuery({
    id: id,
    perPage: 20,
    lang,
  });

  return (
    <div className={s.content}>
      <Typography variant="h4" as="h4">
        {title}
      </Typography>
      <div className={s.contentContainer}>
        {categories &&
          categories.data.map((category) => (
            <CategoryElem
              key={category.id}
              category={category}
              setIsOpen={setIsOpen}
            />
          ))}
      </div>
    </div>
  );
};
