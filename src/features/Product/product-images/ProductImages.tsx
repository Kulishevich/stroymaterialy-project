import React, { useState } from "react";
import s from "./ProductImages.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Product } from "@/api/products/products.types";

type ProductImagesProps = {
  item: Product;
};

export const ProductImages = ({ item }: ProductImagesProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const isDiscount = !!Number(item.discount.split(" ")[0]);
  return (
    <div className={s.container}>
      <div className={s.imagesContainer}>
        {item.images.additional.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={86}
            height={86}
            alt="product image"
            className={s.image}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image
          src={item.images.additional[activeImage].src}
          width={416}
          height={416}
          alt="product image"
          className={s.image}
        />
        <div className={s.tagsContainer}>
          {isDiscount && <Typography variant="body_6">Акция</Typography>}
          {!!item.isNew && <Typography variant="body_6">Новинка</Typography>}
          {!!item.isPopular && (
            <Typography variant="body_6">Популярное</Typography>
          )}
        </div>
      </div>
    </div>
  );
};
