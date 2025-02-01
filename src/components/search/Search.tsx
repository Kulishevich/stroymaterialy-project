import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { debounce } from "lodash";
import { TextField } from "../ui/text-field";
import { useGetSearchItemsQuery } from "@/api/search/search.api";
import { Item } from "../item";
import s from "./Search.module.scss";

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
  console.log("Поиск", data);

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
            {data?.data?.categories?.data?.data?.map((item) => (
              <div className={s.categoryItem} key={item.id}>
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
            ))}
          </div>
          <Typography variant="body_2" as="h2">
            Поиск по товарам
          </Typography>
          <div className={s.productsContainer}>
            {data?.data?.products?.data?.data?.map((item) => (
              <Item variant="horizontal" product={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
