import { Typography } from "@/components/ui/typography";
import React, { useEffect } from "react";
import { useGetFavoriteProductsQuery } from "@/api/products/products.api";
import { FavoriteItem } from "./favorite-item";
import { useDispatch } from "react-redux";
import s from "./Favoriter.module.scss";
import { setFavorites } from "@/store/slices/favorites/favoritesSlice";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { data: favorites } = useGetFavoriteProductsQuery();

  useEffect(() => {
    if (favorites?.data?.favorites) {
      dispatch(setFavorites(favorites.data.favorites.map((elem) => elem.id)));
    }
  }, [favorites, dispatch]);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h3" as="h3">
          Избранное
        </Typography>
        <Typography variant="body_6" className={s.countFav}>
          {favorites?.data.favorites.length} товаров
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
