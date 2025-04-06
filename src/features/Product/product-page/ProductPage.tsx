import { Typography } from "@/components/ui/typography";
import React, { useEffect, useState } from "react";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
// import { FeedbackForm } from "@/components/feedback-form";
import { SimilarProducts } from "@/components/similar-products";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { useDispatch } from "react-redux";
import s from "./ProductPage.module.scss";
import { Product } from "@/api/products/products.types";
import { useGetProductQuery } from "@/api/products/products.api";
import { useRouter } from "next/router";

type ProductPageProps = {
  product: { data: Product };
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const [productState, setProductState] = useState(product);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const id = query.product as string;
  const { data: productData } = useGetProductQuery({ id });

  // const { data: rating } = useGetRatingQuery(product as string);

  useEffect(() => {
    if (!!productData) {
      setProductState(productData);
    }
  }, [productData]);

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
  }, [product, dispatch]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          {productState.data.name}
        </Typography>
        <Typography variant="body_4">
          Код продукта: {productState.data.code}
        </Typography>
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <ProductImages item={productState.data} />
          <ProductInfo item={productState.data} />
        </div>
        <SimilarProducts similars={productState.data.similars} />
        {/* <FeedbackForm /> */}
      </div>
    </div>
  );
};
