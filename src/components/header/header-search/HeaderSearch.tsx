import { BagShoppingIcon, BurgerIcon, HeartIcon } from "@/assets/icons";
import { TextField } from "@/components/ui/text-field";
import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./HeaderSearch.module.scss";

export const HeaderSearch = () => {
  return (
    <div className={s.search}>
      <div className={s.catalogButton}>
        <BurgerIcon />
        <Typography variant="body_2">Каталог</Typography>
      </div>
      <TextField
        variant="search_field"
        className={s.inputSearch}
        placeholder="Поиск по сайту"
      />
      <div className={s.buttonsContainer}>
        <div className={s.favorites}>
          <div className={s.iconContainer}>
            <HeartIcon width={28} height={28} />
          </div>
          <div className={s.textContainer}>
            <Typography as="h6">Избранное</Typography>
            <Typography as="p">Товаров: 0</Typography>
          </div>
        </div>
        <div className={s.shoppingCart}>
          <div className={s.iconContainer}>
            <BagShoppingIcon width={28} height={28} />
          </div>
          <div className={s.textContainer}>
            <Typography as="h6">Корзина</Typography>
            <Typography as="p">Товаров: 0 (0 AMD)</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
