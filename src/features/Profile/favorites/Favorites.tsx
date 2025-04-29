import { Typography } from "@/shared/ui/typography";
import React, { useEffect } from "react";
import { FavoriteItem } from "./favorite-item";
import { useDispatch } from "react-redux";
import s from "./Favoriter.module.scss";
import { setFavorites } from "@/store/slices/favorites/favoritesSlice";
import { useTranslations } from "next-intl";
import { GetFavotireResponse } from "@/api/products/products.types";

export const Favorites = ({
  favorites,
}: {
  favorites:
    | {
        data: GetFavotireResponse;
      }
    | undefined;
}) => {
  const t = useTranslations("profile.favorites");
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites?.data?.favorites) {
      dispatch(setFavorites(favorites.data.favorites.map((elem) => elem.id)));
    }
  }, [favorites, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h3" as="h3">
          {t("title")}
        </Typography>
        <Typography variant="body_6" className={s.countFav}>
          {favorites?.data.favorites.length} {t("products")}
        </Typography>
      </div>
      <div className={s.cardsContainer}>
        {favorites?.data.favorites.map((favorite) => (
          <FavoriteItem favorite={favorite} key={favorite.id} />
        ))}
      </div>
    </div>
  );
};
