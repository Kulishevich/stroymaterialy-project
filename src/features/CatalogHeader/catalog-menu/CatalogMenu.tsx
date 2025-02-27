import React, { useEffect, useRef, useState } from "react";
import s from "./CatalogMenu.module.scss";
import Image from "next/image";
import { ArrowRightIcon } from "@/assets/icons";
import clsx from "clsx";
import { Typography } from "@/components/ui/typography";
import { useGetCategoriesQuery } from "@/api/categories/categories.api";
import { ActiveCategory } from "../active-category";

type CatalogMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CatalogMenu = ({ setIsOpen }: CatalogMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: categories, isLoading } = useGetCategoriesQuery();
  const activeTitle = categories?.data.find(
    (elem) => elem.id === activeCategory
  )?.name;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveCategory(null);
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
        {!isLoading &&
          categories &&
          categories.data.map((category) => (
            <div
              className={clsx(
                s.category,
                activeCategory === category.id && s.active
              )}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
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
            </div>
          ))}
      </div>

      {activeCategory && activeTitle && (
        <ActiveCategory
          id={activeCategory}
          title={activeTitle}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
