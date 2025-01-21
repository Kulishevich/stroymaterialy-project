import React, { useEffect } from "react";
import s from "./ProductsContent.module.scss";
import { Item } from "@/components/item";
import { useGetProductsByCategoryQuery } from "@/api/products/products.api";
import { useRouter } from "next/router";

export const ProductContent = () => {
  const router = useRouter();
  const { products } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (!products || typeof products !== "string") {
        router.push("/404");
      }
    }
  }, [products, router.isReady, router]);

  const { data: productsItems, isLoading } = useGetProductsByCategoryQuery({
    id: products as string,
    perPage: 20,
  });

  if (!isLoading && productsItems) {
    console.log("Продукты:", productsItems);
  }

  return (
    <div className={s.container}>
      {!isLoading &&
        productsItems &&
        productsItems.data.products.data.map((product) => (
          <Item product={product} key={product.id} />
        ))}
    </div>
  );
};
