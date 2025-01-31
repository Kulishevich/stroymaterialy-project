import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "../ui/typography";
import Image from "next/image";
// import { Item } from "../item";
import { debounce } from "lodash";
import s from "./Search.module.scss";
import { TextField } from "../ui/text-field";
import { useGetSearchItemsQuery } from "@/api/search/search.api";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => setDebouncedQuery(query), 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  const { data } = useGetSearchItemsQuery({
    keyword: debouncedQuery,
    perPage: "10",
  });

  console.log(searchQuery, debouncedQuery);
  console.log(data);

  return (
    <>
      <TextField
        variant="search"
        className={s.inputSearch}
        placeholder="Поиск по сайту"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery && (
        <div className={s.content}>
          <Typography variant="body_2" as="h2">
            Поиск по категориям
          </Typography>
          <div className={s.categoryContainer}>
            <div className={s.categoryItem}>
              <Image
                src={"/images/category/category1.png"}
                width={36}
                height={36}
                alt="category"
                className={s.imageCategory}
              />
              <Typography variant="body_4">
                Спецодежда и средства защиты
              </Typography>
            </div>
            <div className={s.categoryItem}>
              <Image
                src={"/images/category/category2.png"}
                width={36}
                height={36}
                alt="category"
                className={s.imageCategory}
              />
              <Typography variant="body_4">Сантехника</Typography>
            </div>
            <div className={s.categoryItem}>
              <Image
                src={"/images/category/category3.png"}
                width={36}
                height={36}
                alt="category"
                className={s.imageCategory}
              />
              <Typography variant="body_4">Стройматериалы</Typography>
            </div>
            <div className={s.categoryItem}>
              <Image
                src={"/images/category/category4.png"}
                width={36}
                height={36}
                alt="category"
                className={s.imageCategory}
              />
              <Typography variant="body_4">Сад и огород</Typography>
            </div>
          </div>
          <Typography variant="body_2" as="h2">
            Поиск по товарам
          </Typography>
          <div className={s.productsContainer}>
            {/* <Item variant="horizontal" /> */}
            {/* <Item variant="horizontal" /> */}
            {/* <Item variant="horizontal" /> */}
          </div>
        </div>
      )}
    </>
  );
};
