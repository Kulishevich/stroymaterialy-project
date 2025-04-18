import React, { useEffect, useState } from "react";
import s from "./ProductImages.module.scss";
import Image from "next/image";
import { Typography } from "@/shared/ui/typography";
import { Product } from "@/api/products/products.types";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

type ProductImagesProps = {
  item: Product;
};

export const ProductImages = ({ item }: ProductImagesProps) => {
  const isMobile = useIsMobile("tablet");
  const [activeImage, setActiveImage] = useState(item?.images?.main?.src || "");
  const isDiscount = !!Number(item.discount.split(" ")[0]);

  useEffect(() => {
    setActiveImage(item?.images?.main?.src || "");
  }, [item?.images?.main?.src]);

  return (
    <div className={s.container}>
      <div className={s.imagesContainer}>
        {!!item?.images?.additional?.length &&
          item.images.additional.map(
            (image, index) =>
              !!image.src && (
                <Image
                  key={index}
                  src={image.src}
                  width={!isMobile ? 86 : 64}
                  height={!isMobile ? 86 : 64}
                  alt="product image"
                  className={s.image}
                  onClick={() => setActiveImage(image.src)}
                />
              )
          )}
      </div>
      <div className={s.imageContainer}>
        {item?.images?.main?.src && (
          <Image
            src={activeImage}
            width={!isMobile ? 416 : 336}
            height={!isMobile ? 416 : 336}
            alt="product image"
            className={s.image}
          />
        )}
        <div className={s.tagsContainer}>
          {isDiscount && (
            <Typography variant="body_6" className={s.promotion}>
              Акция
            </Typography>
          )}
          {!!item.bonusPercent && (
            <Typography variant="body_6" className={s.promotion}>
              -{item.bonusPercent}%
            </Typography>
          )}
          {!!item.isNew && (
            <Typography variant="body_6" className={s.new}>
              Новинка
            </Typography>
          )}
          {!!item.isPopular && (
            <Typography variant="body_6" className={s.popular}>
              Популярное
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
