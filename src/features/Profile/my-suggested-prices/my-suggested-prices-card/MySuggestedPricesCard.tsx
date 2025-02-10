import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/counter";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import s from "./MySuggestedPricesCard.module.scss";

type MySuggestedPricesCard = {
  product: {
    id: string;
    image: string;
    title: string;
    price: string;
  };
};

export const MySuggestedPricesCard = ({ product }: MySuggestedPricesCard) => {
  const t = useTranslations("profile.my_suggested_prices");
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

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
          <Typography variant="body_5">{t("product")}</Typography>
          <Typography variant="body_6">{product.title}</Typography>
        </div>
        <div className={s.container}>
          <Typography variant="body_5">{t("my_suggested_price")}</Typography>
          <div className={s.flexContainer}>
            <div className={s.container}>
              <Typography variant="body_8">{t("price")}</Typography>
              <TextField defaultValue={product.price} className={s.input} />
            </div>
            <div className={s.container}>
              <Typography variant="body_8">{t("quantity")}</Typography>
              <Counter
                size="s"
                countCurrent={count}
                increment={increment}
                decrement={decrement}
              />
            </div>
          </div>
        </div>
        <div className={s.container}>
          <Typography variant="body_5">{t("status")}</Typography>
          <Typography variant="body_6">{t("sent")}</Typography>
        </div>

        <Button className={s.button}>{t("buy")}</Button>
      </div>
    </div>
  );
};
