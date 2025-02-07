import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { debounce } from "lodash";
import { TextField } from "../ui/text-field";
import { useGetSearchItemsQuery } from "@/api/search/search.api";
import { Item } from "../item";
import { useTranslations } from "next-intl";
import s from "./Search.module.scss";

export const Search = () => {
  const t = useTranslations("header.search");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debouncedSearch = useCallback(
    debounce((query) => setDebouncedQuery(query), 500),
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        searchRef.current &&
        !searchRef.current.contains(target) &&
        inputRef.current &&
        !inputRef.current.contains(target)
      ) {
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  const { data } = useGetSearchItemsQuery({
    keyword: debouncedQuery,
    perPage: "10",
  });

  console.log("Поиск", data);

  return (
    <>
      <TextField
        variant="search"
        className={s.inputSearch}
        placeholder={t("search")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={inputRef}
      />

      {searchQuery && (
        <div className={s.content} ref={searchRef}>
          <Typography variant="body_2" as="h2">
            {t("search_category")}
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
            {t("search_products")}
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
