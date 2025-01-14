import React from "react";
import s from "./SubcategoryPage.module.scss";
import { CategoryTags } from "@/features/Category/category-tags/CategoryTags";
import { BestSellingProducts } from "@/components/best-selling-products";

const subcategoryes = [
  {
    id: "1",
    image: "/images/products/product1.png",
    value: "Малярные ленты",
  },
  {
    id: "2",
    image: "/images/products/product2.png",
    value: "Скотчи",
  },
  {
    id: "3",
    image: "/images/products/product3.png",
    value: "Изоленты",
  },
  {
    id: "4",
    image: "/images/products/product4.png",
    value: "Самоклеящиеся ленты",
  },
  {
    id: "5",
    image: "/images/products/product5.png",
    value: "Уплотнители для окон и дверей",
  },
];

export const SubcategoryPage = () => {
  return (
    <div className={s.container}>
      <CategoryTags
        title={"Скотч, изолента, клейкая лента"}
        tags={subcategoryes}
      />
      <BestSellingProducts />
    </div>
  );
};
