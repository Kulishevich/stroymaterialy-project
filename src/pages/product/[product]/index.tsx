import { useGetProductQuery } from "@/api/products/products.api";
import { ProductPage } from "@/features/Product/product-page";
import { setBreadcrumbs } from "@/store/slices/breadcrumbs/breadcrumbsSlice";
import { RootState } from "@/store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductPageDynamic() {
  const lang = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const id = query.product as string;
  const { data: productData } = useGetProductQuery({ id, lang });

  // const { data: rating } = useGetRatingQuery(product as string);

  useEffect(() => {
    if (productData?.data.breadcrumb) {
      dispatch(
        setBreadcrumbs([
          ...productData?.data.breadcrumb,
          {
            name: productData?.data.name,
            uuid: productData?.data.id,
          },
        ])
      );
    }
  }, [productData, dispatch]);

  return (
    <>
      <Head>
        <title>
          {productData?.data?.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"}
        </title>
        <meta
          name="description"
          content={
            productData?.data?.description ||
            "Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={
            productData?.data?.name ||
            "Domix.am - крупнейший магазин стройматериалов в Армении с Доставкой"
          }
        />
        <meta
          property="og:description"
          content={
            productData?.data?.description ||
            "Купить строительные материалы для ремонта и стройки в строительном магазине Domix.am. Быстрая доставка. Низкие цены"
          }
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ProductPage product={productData} />
      </div>
    </>
  );
}
