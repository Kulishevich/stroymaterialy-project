import { Typography } from "@/components/ui/typography";
import React, { useEffect } from "react";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
import { FeedbackForm } from "@/components/feedback-form";
import { SimilarProducts } from "@/components/similar-products";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { useDispatch } from "react-redux";
import s from "./ProductPage.module.scss";
import { Product } from "@/api/products/products.types";

type ProductPageProps = {
  product: { data: Product };
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const dispatch = useDispatch();

  // const { data: rating } = useGetRatingQuery(product as string);

  useEffect(() => {
    if (product?.data.breadcrumb) {
      dispatch(
        setBreadcrumbs([
          ...product?.data.breadcrumb,
          {
            name: product?.data.name,
            uuid: product?.data.id,
          },
        ])
      );
    }
  }, [product]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          {product.data.name}
        </Typography>
        <Typography variant="body_4">
          Код продукта: {product.data.code}
        </Typography>
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <ProductImages item={product.data} />
          <ProductInfo item={product.data} />
        </div>
        <SimilarProducts similars={product.data.similars} />
        <FeedbackForm />
      </div>
    </div>
  );
};
