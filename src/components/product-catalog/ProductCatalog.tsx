import React, { useState } from "react";
import { Typography } from "../ui/typography";
import s from "./ProductCatalog.module.scss";
import { Item } from "../item";
import clsx from "clsx";

const sort = [
  {
    id: "1",
    value: "Самые продаваемые товары",
  },
  {
    id: "2",
    value: "Акции",
  },
  {
    id: "3",
    value: "Новинки",
  },
];

export const ProductCatalog = () => {
  const [activeSort, setActiveSort] = useState<string>(sort[0].id);

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Каталог продукции
      </Typography>
      <div className={s.sort}>
        {sort.map((elem) => (
          <Typography
            variant="body_4"
            as="button"
            key={elem.id}
            onClick={() => setActiveSort(elem.id)}
            className={clsx(activeSort === elem.id && s.active)}
          >
            {elem.value}
          </Typography>
        ))}
      </div>
      <div className={s.itemsContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
