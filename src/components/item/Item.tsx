import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { HeartIcon } from "@/assets/icons";
import { Counter } from "../counter";
import clsx from "clsx";
import { Product } from "@/api/products/products.types";
import s from "./Item.module.scss";
import Link from "next/link";
import { useAddItemCartMutation } from "@/api/cart/cart.api";
import {
  useAddInFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/api/products/products.api";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { showToast } from "../ui/toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export type ItemProps = {
  variant?: "vertical" | "horizontal";
  product: Product;
};

export const Item = ({ variant = "vertical", product }: ItemProps) => {
  const [count, setCount] = useState(1);
  const vertical = variant === "vertical";
  const isMobile = useIsMobile("tablet");
  const sizeImage = !isMobile ? (vertical ? 306 : 110) : 160;
  const favoritesItems = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favoritesItems.includes(product.id);
  const isDiscount = !!Number(product.discount.split(" ")[0]);

  const [addItemCart] = useAddItemCartMutation();
  const [addInFavorite] = useAddInFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddItemInCart = async () => {
    const fetchData = {
      id: product.id,
      count: count,
    };
    try {
      await addItemCart(fetchData).unwrap();
      setCount(1);
      showToast({ message: "Добавлено в корзину", variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка", variant: "error" });
    }
  };

  const handleAddFavorite = async () => {
    if (isFavorite) {
      try {
        const res = await deleteFavorite(product?.id).unwrap();
        console.log(res);
        showToast({ message: "Удалено из избранное", variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: "Ошибка", variant: "error" });
      }
    } else {
      try {
        const res = await addInFavorite({ products: [product?.id] }).unwrap();
        console.log(res);
        showToast({ message: "Добавлено в избранное", variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: "Ошибка", variant: "error" });
      }
    }
  };

  return (
    <div className={clsx(vertical ? s.container : s.horizontalContainer)}>
      <div className={s.imageContainer}>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images.main.src}
            width={sizeImage}
            height={sizeImage}
            alt="item"
            className={s.image}
          />
        </Link>
        {variant !== "horizontal" && (
          <>
            <div className={s.tagsContainer}>
              {isDiscount && (
                <Typography className={s.promotion} variant="body_6">
                  Акция
                </Typography>
              )}
              {!!product.isNew && (
                <Typography className={s.new} variant="body_6">
                  Новинка
                </Typography>
              )}

              {!!product.isPopular && (
                <Typography className={s.popular} variant="body_6">
                  Популярное
                </Typography>
              )}
            </div>
            <Button
              variant="only_icon"
              onClick={handleAddFavorite}
              className={clsx(s.favoriteButton, isFavorite && s.active)}
            >
              <HeartIcon />
            </Button>
          </>
        )}
      </div>
      <div className={s.content}>
        <Typography variant={vertical ? "body_1" : "body_3"} className={s.text}>
          {product.name}
        </Typography>
        <div className={s.priceContainer}>
          {isDiscount ? (
            <>
              <Typography
                variant={vertical ? "h3" : "body_5"}
                as="h3"
                className={s.discount}
              >
                {product.discountedPrice}
              </Typography>
              <Typography
                variant={vertical ? "body_3" : "body_6"}
                className={s.sale}
                as="span"
              >
                {product.price}
              </Typography>
            </>
          ) : (
            <Typography variant={vertical ? "h3" : "body_5"} as="h3">
              {product.price}
            </Typography>
          )}
        </div>
        <div className={vertical ? s.buttonContainer : s.horizontalContainer}>
          <Counter
            size={vertical ? "l" : "m"}
            countCurrent={count}
            increment={increment}
            decrement={decrement}
          />
          <Button
            className={!vertical && s.buttonVertical}
            onClick={handleAddItemInCart}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
