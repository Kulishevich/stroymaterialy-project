import React from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { HeartIcon } from "@/assets/icons";
import { Counter } from "../counter";
import clsx from "clsx";
import { Product } from "@/api/products/products.types";
import s from "./Item.module.scss";
import Link from "next/link";

export type ItemProps = {
  variant?: "vertical" | "horizontal";
  product: Product;
};

export const Item = ({ variant = "vertical", product }: ItemProps) => {
  const vertical = variant === "vertical";
  const sizeImage = vertical ? 306 : 110;

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
              {!!product.discountedPrice && (
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
            <HeartIcon className={s.icon} />
          </>
        )}
      </div>
      <div className={s.content}>
        <Typography variant={vertical ? "body_1" : "body_3"} className={s.text}>
          {product.name}
        </Typography>
        <div className={s.priceContainer}>
          <Typography variant={vertical ? "h3" : "body_5"} as="h3">
            {product.discountedPrice}
          </Typography>
          <Typography
            variant={vertical ? "body_3" : "body_6"}
            className={s.sale}
            as="span"
          >
            {product.price}
          </Typography>
        </div>
        <div className={vertical ? s.buttonContainer : s.horizontalContainer}>
          <Counter size={vertical ? "l" : "m"} />
          <Button className={!vertical && s.buttonVertical}>В корзину</Button>
        </div>
      </div>
    </div>
  );
};
