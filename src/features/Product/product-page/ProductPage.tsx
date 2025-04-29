import { Typography } from "@/shared/ui/typography";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
// import { FeedbackForm } from "@/components/feedback-form";
import { SimilarProducts } from "@/components/similar-products";
import s from "./ProductPage.module.scss";
import { Product } from "@/api/products/products.types";
import { useTranslations } from "next-intl";

type ProductPageProps = {
  product: { data: Product } | undefined;
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const t = useTranslations("product");

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          {product?.data.name}
        </Typography>
        <Typography variant="body_4">
          {t("product_code")}: {product?.data.code}
        </Typography>
      </div>
      <div className={s.container}>
        {!!product?.data && (
          <div className={s.content}>
            <ProductImages item={product?.data} />
            <ProductInfo item={product?.data} />
          </div>
        )}
        {!!product?.data.similars && (
          <SimilarProducts similars={product?.data.similars} />
        )}
        {/* <FeedbackForm /> */}
      </div>
    </div>
  );
};
