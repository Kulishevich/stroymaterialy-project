import React from "react";
import s from "./MySuggestedPricesCard.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/counter";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

type MySuggestedPricesCard = {
  product: {
    id: string;
    image: string;
    title: string;
    price: string;
  };
};

export const MySuggestedPricesCard = ({ product }: MySuggestedPricesCard) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <Image
          src={product.image}
          width={!isMobile ? 120 : 100}
          height={!isMobile ? 120 : 100}
          alt="product card"
          className={s.image}
        />
        <Typography variant="body_7">{product.price}</Typography>
      </div>
      <div className={s.productInfo}>
        <div className={s.container}>
          <Typography variant="body_5">Товар</Typography>
          <Typography variant="body_6">{product.title}</Typography>
        </div>
        <div className={s.container}>
          <Typography variant="body_5">Моя предложенная цена</Typography>
          <div className={s.flexContainer}>
            <div className={s.container}>
              <Typography variant="body_8">Цена</Typography>
              <TextField defaultValue={product.price} className={s.input} />
            </div>
            <div className={s.container}>
              <Typography variant="body_8">Количество</Typography>
              <Counter size="s" />
            </div>
          </div>
        </div>
        <div className={s.container}>
          <Typography variant="body_5">Статус</Typography>
          <Typography variant="body_6">Отправлено</Typography>
        </div>

        <Button className={s.button}>Купить</Button>
      </div>
    </div>
  );
};
