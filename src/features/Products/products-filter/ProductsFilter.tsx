import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import s from "./ProductsFilter.module.scss";
import Accordion from "@/components/ui/accordion/Accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type ProductsFilterProps = {
  filtersData: {
    "category.filters.price.label": {
      "category.filters.price.max": number;
      "category.filters.price.min": number;
    };
    "category.filters.brand.label": string[] | Record<string, string | number>;
  };
};

export const ProductsFilter = ({ filtersData }: ProductsFilterProps) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const addNewFilter = (category: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (category === "Բռենդ" || category === "Бренд") {
      const existingBrands = searchParams.getAll("brands[]");

      if (existingBrands.includes(value)) {
        searchParams.delete("brands[]");
        existingBrands
          .filter((brand) => brand !== value)
          .forEach((brand) => searchParams.append("brands[]", brand));
      } else {
        searchParams.append("brands[]", value);
      }
    } else {
      const filterKey = `filters[${category}][]`;
      const existingFilters = searchParams.getAll(filterKey);

      if (existingFilters.includes(value)) {
        searchParams.delete(filterKey);
        existingFilters
          .filter((item) => item !== value)
          .forEach((item) => searchParams.append(filterKey, item));
      } else {
        searchParams.append(filterKey, value);
      }
    }

    searchParams.set("page", "1");
    router.push(`${pathname}?${decodeURIComponent(searchParams.toString())}`);
  };

  const handleIsChecked = (category: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (category === "Բռենդ" || category === "Бренд") {
      const existingBrands = searchParams.getAll("brands[]");
      return existingBrands.includes(value);
    } else {
      const filterKey = `filters[${category}][]`;
      const existingFilters = searchParams.getAll(filterKey);
      return existingFilters.includes(value);
    }
  };

  const changePrice = (key: "max" | "min") => {
    const searchParams = new URLSearchParams(window.location.search);
    if (key === "min" && !!minPrice) {
      console.log(minPrice);
      searchParams.set(`price[${key}]`, minPrice);
      searchParams.set("page", "1");
      router.push(`${pathname}?${decodeURIComponent(searchParams.toString())}`);
    } else if (key === "max" && !!maxPrice) {
      console.log(maxPrice);
      searchParams.set(`price[${key}]`, maxPrice);
      searchParams.set("page", "1");
      router.push(`${pathname}?${decodeURIComponent(searchParams.toString())}`);
    }
  };

  const clearAllFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    router.push(pathname);
  };

  return (
    <div className={s.container}>
      <Typography as="h3" variant="h3">
        Фильтр
      </Typography>
      {Object.entries(filtersData).map(([category, values]) => (
        <Accordion title={category} key={category}>
          {Array.isArray(values) ? (
            values.map((value, index) => (
              <Checkbox
                label={value}
                key={index}
                className={s.checkbox}
                onClick={() => addNewFilter(category, value)}
                checked={handleIsChecked(category, value)}
              />
            ))
          ) : typeof values === "object" ? (
            Object.values(values).map((value, index) =>
              typeof value === "number" ? (
                <div className={s.inputContainer} key={index}>
                  <Typography variant="body_5">
                    {!index ? "От" : "До"}
                  </Typography>
                  <TextField
                    placeholder={String(value)}
                    value={!index ? minPrice : maxPrice}
                    onBlur={() => changePrice(!index ? "min" : "max")}
                    onChange={(event) => {
                      if (!index) {
                        setMinPrice(event.target.value);
                      } else {
                        setMaxPrice(event.target.value);
                      }
                    }}
                  />
                </div>
              ) : (
                <Checkbox
                  label={value}
                  key={index}
                  className={s.checkbox}
                  onClick={() => addNewFilter(category, value)}
                  checked={handleIsChecked(category, value)}
                />
              )
            )
          ) : (
            <Checkbox
              label={values}
              className={s.checkbox}
              onClick={() => addNewFilter(category, values)}
              checked={handleIsChecked(category, values)}
            />
          )}
        </Accordion>
      ))}
      <Typography
        as={"button"}
        variant="button"
        className={s.resetFilter}
        onClick={clearAllFilters}
      >
        Очистить фильтр
      </Typography>
    </div>
  );
};
