import { Typography } from "@/components/ui/typography";
import React, { useEffect } from "react";
import s from "./ProductPage.module.scss";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
import { FeedbackForm } from "@/components/feedback-form";
import { useRouter } from "next/router";
import {
  useGetProductQuery,
  useGetRatingQuery,
} from "@/api/products/products.api";
import { SimilarProducts } from "@/components/similar-products";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { useDispatch } from "react-redux";

export const ProductPage = ({}) => {
  const router = useRouter();
  const { product } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (!product || typeof product !== "string") {
        router.push("/404");
      }
    }
  }, [product, router.isReady, router]);

  const { data: rating } = useGetRatingQuery({ id: product as string });
  const { data: prod, isLoading } = useGetProductQuery({
    id: product as string,
    perPage: 20,
  });

  useEffect(() => {
    if (prod?.data.breadcrumb) {
      dispatch(
        setBreadcrumbs([
          ...prod?.data.breadcrumb,
          {
            name: prod?.data.name,
            uuid: prod?.data.id,
          },
        ])
      );
    }
  }, [prod]);

  console.log("Рейтинг", rating);

  if (isLoading || !prod) return;

  return (
    <div>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          {prod?.data.name}
        </Typography>
        <Typography variant="body_4">
          Код продукта: {prod?.data.code}
        </Typography>
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <ProductImages item={prod?.data} />
          <ProductInfo item={prod?.data} />
        </div>
        <SimilarProducts similars={prod.data.similars} />
        <FeedbackForm />
      </div>
    </div>
  );
};
