import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./ActiveCategory.module.scss";
// import { useGetProductsByCategoryQuery } from "@/api/products/products.api";
import { useGetSubCategoriesQuery } from "@/api/categories/categories.api";

type ActiveCategoryProps = {
  id: string;
};

export const ActiveCategory = ({ id }: ActiveCategoryProps) => {
  const { data, error, isLoading } = useGetSubCategoriesQuery({
    id: id,
    perPage: 20,
  });
  console.log(id);
  console.log(data);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных</p>;

  return (
    <div className={s.content}>
      <Typography variant="h4" as="h4">
        Материалы, используемые в бытовых и строительных работах
      </Typography>
      <div className={s.contentContainer}>
        <div className={s.elem}>
          <Typography variant="body_5" as="h2">
            Упаковочные и укрывные пленки
          </Typography>
          <ul>
            <Typography variant="body_5">
              Скотч, изолента, клейкая лента
            </Typography>
            <Typography variant="body_3" as="li">
              Скотчи
            </Typography>
            <Typography variant="body_3" as="li">
              Малярные ленты
            </Typography>
            <Typography variant="body_3" as="li">
              Изоленты
            </Typography>
            <Typography variant="body_3" as="li">
              Самоклеящиеся ленты
            </Typography>
            <Typography variant="body_3" as="li">
              Уплотнители для окон и дверей
            </Typography>
          </ul>
        </div>
        <div className={s.elem}>
          <ul>
            <Typography variant="body_5" as="h2">
              Абразивные материалы
            </Typography>
            <Typography as="li" variant="body_3">
              Наждачная бумага
            </Typography>
            <Typography as="li" variant="body_3">
              Абразивные губки
            </Typography>
            <Typography as="li" variant="body_3">
              Абразивные диски
            </Typography>
          </ul>
        </div>
        <div className={s.elem}>
          <Typography variant="body_5">Веревки, шнуры</Typography>
          <Typography variant="body_5">
            Штукатурная сетка и ленты для заделки швов
          </Typography>
          <Typography variant="body_5">Крестики для плитки</Typography>
          <Typography variant="body_5">Мешки</Typography>
          <Typography variant="body_5">Ведра</Typography>
          <Typography variant="body_5">Губки</Typography>
        </div>
      </div>
    </div>
  );
};
