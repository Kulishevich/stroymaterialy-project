import {
  BagShoppingIcon,
  BurgerIcon,
  HeartOutlineIcon,
} from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import React, { useEffect, useState } from "react";
import { Button } from "@/shared/ui/button";
import { CatalogPopup } from "@/components/catalog-popup";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { Search } from "@/components/search";
import { useGetCartQuery } from "@/api/cart/cart.api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleLoginModal } from "@/store/slices/auth-modal/authModalSlice";
import s from "./HeaderSearch.module.scss";
import { useGetFavoriteProductsQuery } from "@/api/products/products.api";
import { setFavorites } from "@/store/slices/favorites/favoritesSlice";
import { useTranslations } from "next-intl";

export const HeaderSearch = () => {
  const t = useTranslations("header.search");
  const [isActiveCatalog, setIsActiveCatalog] = useState<boolean>(false);
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const lang = router.locale || "hy";

  const { data: favorites } = useGetFavoriteProductsQuery(
    { lang },
    {
      skip: !token,
    }
  );
  const { data: cart } = useGetCartQuery();

  useEffect(() => {
    if (favorites?.data?.favorites) {
      dispatch(setFavorites(favorites.data.favorites.map((elem) => elem.id)));
    }
  }, [favorites, dispatch]);

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
        <Typography variant="body_2">{t("catalog")}</Typography>
      </Button>
      <div className={s.search}>
        <Search />
        <div className={s.buttonsContainer}>
          <Button className={s.favorites} onClick={handleFavoritesClick}>
            <div className={s.iconContainer}>
              <HeartOutlineIcon />
            </div>
            <div className={s.textContainer}>
              <Typography as="h6">{t("favorites")}</Typography>
              <Typography as="p">
                {t("products")}:{" "}
                {!!favorites?.data.favorites.length
                  ? favorites?.data.favorites.length
                  : 0}
              </Typography>
            </div>
          </Button>
          <Button
            as={Link}
            href={Paths.shoppingCart}
            className={s.shoppingCart}
          >
            <div className={s.iconContainer}>
              <BagShoppingIcon />
            </div>
            <div className={s.textContainer}>
              <Typography as="h6">{t("cart")}</Typography>
              <Typography as="p">
                {t("products")}: {cart?.data.count ? cart?.data.count : 0} (
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
