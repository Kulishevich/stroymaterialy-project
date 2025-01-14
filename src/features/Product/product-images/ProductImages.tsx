import React, { useState } from "react";
import s from "./ProductImages.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";

type ProductImagesProps = {
  product: {
    images: string[];
  };
};

export const ProductImages = ({ product }: ProductImagesProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const selectedImage = product.images[activeImage];
  return (
    <div className={s.container}>
      <div className={s.imagesContainer}>
        {product.images.map((image, index) => (
          <Image
            key={index}
            src={image}
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
          src={selectedImage}
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
