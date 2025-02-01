import React from "react";
import s from "./ProductImages.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { ProductImagesType } from "@/api/products/products.types";

type ProductImagesProps = {
  images: ProductImagesType;
};

export const ProductImages = ({ images }: ProductImagesProps) => {
  return (
    <div className={s.container}>
      <div className={s.imagesContainer}>
        {images.additional.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={86}
            height={86}
            alt="product image"
            className={s.image}
          />
        ))}
      </div>
      <div className={s.imageContainer}>
        <Image
          src={images.main.src}
          width={416}
          height={416}
          alt="product image"
          className={s.image}
        />
        <div className={s.tagsContainer}>
          <Typography variant="body_6">Акция</Typography>
          <Typography variant="body_6">Новинка</Typography>
          <Typography variant="body_6">Популярное</Typography>
        </div>
      </div>
    </div>
  );
};
