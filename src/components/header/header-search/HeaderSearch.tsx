import { BagShoppingIcon, BurgerIcon, HeartIcon } from "@/assets/icons";
import { TextField } from "@/components/ui/text-field";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import s from "./HeaderSearch.module.scss";
import { Button } from "@/components/ui/button";
import { CatalogPopup } from "@/components/catalog-popup";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { Search } from "@/components/search";

export const HeaderSearch = () => {
  const [isActiveCatalog, setIsActiveCatalog] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className={s.container}>
      <Button
        className={s.catalogButton}
        onClick={() => setIsActiveCatalog(true)}
        active={isActiveCatalog}
      >
        <BurgerIcon />
        <Typography variant="body_2">Каталог</Typography>
      </Button>
      <div className={s.search}>
        <TextField
          variant="search_field"
          className={s.inputSearch}
          placeholder="Поиск по сайту"
          onClick={() => setSearchIsOpen(true)}
        />
        <Search isOpen={searchIsOpen} setIsOpen={setSearchIsOpen} />
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
          <Typography
            as={Link}
            href={Paths.shoppingCart}
            className={s.shoppingCart}
          >
            <div className={s.iconContainer}>
              <BagShoppingIcon width={28} height={28} />
            </div>
            <div className={s.textContainer}>
              <Typography as="h6">Корзина</Typography>
              <Typography as="p">Товаров: 0 (0 AMD)</Typography>
            </div>
          </Typography>
        </div>
      </div>
      <CatalogPopup isOpen={isActiveCatalog} setIsOpen={setIsActiveCatalog} />
    </div>
  );
};
