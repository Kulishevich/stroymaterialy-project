import React from "react";
import s from "./Item.module.scss";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { HeartIcon } from "@/assets/icons";
import { Counter } from "../counter";
import clsx from "clsx";

export type ItemProps = {
  variant?: "vertical" | "horizontal";
};

export const Item = ({ variant = "vertical" }: ItemProps) => {
  const vertical = variant === "vertical";
  const sizeImage = vertical ? 306 : 110;

  return (
    <div className={clsx(vertical ? s.container : s.horizontalContainer)}>
      <div className={s.imageContainer}>
        <Image
          src={"/images/image.png"}
          width={sizeImage}
          height={sizeImage}
          alt="item"
          className={s.image}
        />
        {variant !== "horizontal" && (
          <>
            <div className={s.tagsContainer}>
              <Typography className={s.promotion} variant="body_6">
                Акция
              </Typography>
              <Typography className={s.new} variant="body_6">
                Новинка
              </Typography>
              <Typography className={s.popular} variant="body_6">
                Популярное
              </Typography>
            </div>
            <HeartIcon className={s.icon} />
          </>
        )}
      </div>
      <div className={s.content}>
        <Typography variant={vertical ? "body_1" : "body_3"} className={s.text}>
          Круглый алюминиевый диск 115x22,2/80 WOKIN
        </Typography>
        <div className={s.priceContainer}>
          <Typography variant={vertical ? "h3" : "body_5"} as="h3">
            500,00 AMD / шт
          </Typography>
          <Typography
            variant={vertical ? "body_3" : "body_6"}
            className={s.sale}
            as="span"
          >
            600,00 AMD
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
