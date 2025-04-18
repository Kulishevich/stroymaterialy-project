import { Typography } from "@/shared/ui/typography";
import { ProductImages } from "../product-images";
import { ProductInfo } from "../product-info";
// import { FeedbackForm } from "@/components/feedback-form";
import { SimilarProducts } from "@/components/similar-products";
import s from "./ProductPage.module.scss";
import { Product } from "@/api/products/products.types";

type ProductPageProps = {
  product: { data: Product } | undefined;
};

export const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant="h1" as="h1">
          {product?.data.name}
        </Typography>
        <Typography variant="body_4">
          Код продукта: {product?.data.code}
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
