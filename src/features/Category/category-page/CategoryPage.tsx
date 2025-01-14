import React from "react";
import { useRouter } from "next/router";
import s from "./CategoryPage.module.scss";
import { CategoryTags } from "../category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";

const categoryes = [
  {
    id: "1",
    image: "/images/subcategory/subcategory1.png",
    value: "Упаковочные и укрывные пленки",
  },
  {
    id: "2",
    image: "/images/subcategory/subcategory2.png",
    value: "Скотч, изолента, клейкая лента",
  },
  {
    id: "3",
    image: "/images/subcategory/subcategory3.png",
    value: "Абразивные материалы",
  },
  {
    id: "4",
    image: "/images/subcategory/subcategory4.png",
    value: "Штукатурная сетка и ленты для задел...",
  },
  {
    id: "5",
    image: "/images/subcategory/subcategory5.png",
    value: "Крестики для плитки",
  },
  {
    id: "6",
    image: "/images/subcategory/subcategory6.png",
    value: "Мешки",
  },
  {
    id: "7",
    image: "/images/subcategory/subcategory7.png",
    value: "Вёдра",
  },
  {
    id: "8",
    image: "/images/subcategory/subcategory8.png",
    value: "Губки",
  },
];

export const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query; // Получаем название категории из маршрута
  console.log(category);

  return (
    <div className={s.container}>
      <CategoryTags
        title={"Материалы, используемые в бытовых и строительных работах"}
        tags={categoryes}
      />
      <BestSellingProducts />
    </div>
  );
};
