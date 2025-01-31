import { BagShoppingIcon, BurgerIcon, HeartOutlineIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CatalogPopup } from "@/components/catalog-popup";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { Search } from "@/components/search";
import { useGetCartQuery } from "@/api/cart/cart.api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal-slice/authModalSlice";
import s from "./HeaderSearch.module.scss";

export const HeaderSearch = () => {
  const [isActiveCatalog, setIsActiveCatalog] = useState<boolean>(false);
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const { data: cart } = useGetCartQuery();

  const handleFavoritesClick = () => {
    if (token) {
      router.push(`${Paths.profile}?tab=favorites`);
    } else {
      dispatch(toggleLoginModal());
    }
  };

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
        <Search />
        <div className={s.buttonsContainer}>
          <Button className={s.favorites} onClick={handleFavoritesClick}>
            <div className={s.iconContainer}>
              <HeartOutlineIcon width={28} height={28} />
            </div>
            <div className={s.textContainer}>
              <Typography as="h6">Избранное</Typography>
              <Typography as="p">Товаров: 0</Typography>
            </div>
          </Button>
          <Button
            as={Link}
            href={Paths.shoppingCart}
            className={s.shoppingCart}
          >
            <div className={s.iconContainer}>
              <BagShoppingIcon width={28} height={28} />
            </div>
            <div className={s.textContainer}>
              <Typography as="h6">Корзина</Typography>
              <Typography as="p">
                Товаров: {cart?.data.count ? cart?.data.count : 0} (
                {cart?.data.total ? cart?.data.total : 0})
              </Typography>
            </div>
          </Button>
        </div>
      </div>
      <CatalogPopup isOpen={isActiveCatalog} setIsOpen={setIsActiveCatalog} />
    </div>
  );
};
