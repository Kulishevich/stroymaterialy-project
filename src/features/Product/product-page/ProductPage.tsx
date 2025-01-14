import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./ProductPage.module.scss";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
import { BestSellingProducts } from "@/components/best-selling-products";
import { FeedbackForm } from "@/components/feedback-form";

const product = {
  images: [
    "/images/products/product1.png",
    "/images/products/product2.png",
    "/images/products/product3.png",
    "/images/products/product4.png",
    "/images/products/product5.png",
  ],
};

export const ProductPage = () => {
  return (
    <>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          Лента малярная 24мм, 25м
        </Typography>
        <Typography variant="body_4">Код продукта: 00017589</Typography>
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <ProductImages product={product} />
          <ProductInfo />
        </div>
        <BestSellingProducts />
        <FeedbackForm />
      </div>
    </>
  );
};
