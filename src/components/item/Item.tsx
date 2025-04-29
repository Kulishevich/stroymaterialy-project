import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../../shared/ui/typography";
import { Button } from "../../shared/ui/button";
import { BagShoppingIcon, HeartIcon } from "@/shared/assets/icons";
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
import { showToast } from "../../shared/ui/toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

export type ItemProps = {
  variant?: "vertical" | "horizontal";
  product: Product;
};

export const Item = ({ variant = "vertical", product }: ItemProps) => {
  const t = useTranslations("item");
  const [count, setCount] = useState(1);
  const vertical = variant === "vertical";
  const isMobile = useIsMobile("tablet");
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
      showToast({ message: t("add_in_cart"), variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({
        message: t("add_in_cart_error"),
        variant: "error",
        description: t("add_in_cart_error_description"),
      });
    }
  };

  const handleAddFavorite = async () => {
    if (isFavorite) {
      try {
        await deleteFavorite(product?.id).unwrap();
        showToast({ message: t("delete_from_favorite"), variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({
          message: t("delete_from_favorite_error"),
          variant: "error",
          description: t("delete_from_favorite_error_description"),
        });
      }
    } else {
      try {
        await addInFavorite({ products: [product?.id] }).unwrap();
        showToast({
          message: t("add_in_favorite"),
          variant: "success",
        });
      } catch (err: unknown) {
        console.error(err);
        showToast({
          message: t("add_in_favorite_error"),
          variant: "error",
          description: t("add_in_favorite_error_description"),
        });
      }
    }
  };

  return (
    <div className={clsx(vertical ? s.container : s.horizontalContainer)}>
      <div className={s.imageContainer}>
        <Link href={`/product/${product.id}`} className={s.image}>
          <Image src={product.images.main.src || ""} fill alt="item" />
        </Link>
        {variant !== "horizontal" && (
          <>
            <div className={s.tagsContainer}>
              {isDiscount && (
                <Typography className={s.promotion} variant="body_6">
                  {t("promotion")}
                </Typography>
              )}
              {!!product.isNew && (
                <Typography className={s.new} variant="body_6">
                  {t("new")}
                </Typography>
              )}

              {!!product.isPopular && (
                <Typography className={s.popular} variant="body_6">
                  {t("popular")}
                </Typography>
              )}
              {!!product.bonusPercent && (
                <Typography className={s.promotion} variant="body_6">
                  -{product.bonusPercent}%
                </Typography>
              )}
            </div>
            <Button
              variant="only_icon"
              onClick={handleAddFavorite}
              className={clsx(s.favoriteButton, isFavorite && s.active)}
            >
              <HeartIcon
                width={!isMobile ? 28 : 22}
                height={!isMobile ? 28 : 22}
              />
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
              <Typography variant={vertical ? "body_3" : "body_6"} as="span">
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
            size={vertical ? (!isMobile ? "l" : "s") : "m"}
            countCurrent={count}
            increment={increment}
            decrement={decrement}
          />
          <Button
            className={!vertical ? s.buttonVertical : s.buttonHorizontal}
            onClick={handleAddItemInCart}
          >
            {!isMobile ? (
              "В корзину"
            ) : (
              <BagShoppingIcon width={26} height={26} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
