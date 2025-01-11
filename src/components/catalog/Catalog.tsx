import React, { useEffect, useRef, useState } from "react";
import s from "./Catalog.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import clsx from "clsx";

const categoryes = [
  {
    id: "1",
    image: "/images/category/category1.png",
    value: "Материалы, используемые в бытовых и строительных работах",
  },
  {
    id: "2",
    image: "/images/category/category2.png",
    value: "Электрика",
  },
  {
    id: "3",
    image: "/images/category/category3.png",
    value: "Инструменты",
  },
  {
    id: "4",
    image: "/images/category/category4.png",
    value: "Спецодежда и средства защиты",
  },
  {
    id: "5",
    image: "/images/category/category5.png",
    value: "Крепёж",
  },
  {
    id: "6",
    image: "/images/category/category6.png",
    value: "Интерьер и отделка",
  },
  {
    id: "7",
    image: "/images/category/category7.png",
    value: "Сантехника",
  },
  {
    id: "8",
    image: "/images/category/category8.png",
    value: "Стройматериалы",
  },
  {
    id: "9",
    image: "/images/category/category9.png",
    value: "Сад и огород",
  },
  {
    id: "10",
    image: "/images/category/category10.png",
    value: "Инженерные системы",
  },
];

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveCategory(null); // Скрыть контент
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.container} ref={containerRef}>
      <div className={s.navigate}>
        {categoryes.map((elem) => (
          <div
            className={clsx(s.category, activeCategory === elem.id && s.active)}
            key={elem.id}
            onClick={() => setActiveCategory(elem.id)}
          >
            <Image
              src={elem.image}
              width={36}
              height={36}
              alt="category"
              className={s.imageCategory}
            />
            <Typography variant="body_4">{elem.value}</Typography>
            <ArrowRightIcon className={s.iconCategory} />
          </div>
        ))}
      </div>

      {activeCategory && (
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
      )}
    </div>
  );
};
