import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { debounce } from "lodash";
import { TextField } from "../ui/text-field";
import { useGetSearchItemsQuery } from "@/api/search/search.api";
import { Item } from "../item";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import s from "./Search.module.scss";

export const Search = () => {
  const isMobile = useIsMobile("tablet");
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

      {(searchQuery || isMobile) && (
        <div className={s.content} ref={searchRef}>
          {!!data?.data?.categories?.data?.data.length && (
            <>
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
            </>
          )}
          {!!data?.data?.products?.data?.data.length && (
            <>
              {" "}
              <Typography variant="body_2" as="h2">
                {t("search_products")}
              </Typography>
              <div className={s.productsContainer}>
                {data?.data?.products?.data?.data?.map((item) => (
                  <Item
                    variant={!isMobile ? "horizontal" : "vertical"}
                    product={item}
                    key={item.id}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
