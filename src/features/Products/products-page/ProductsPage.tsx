import { ProductsFilter } from "../products-filter";
import { ProductContent } from "../products-content";
import { Banner } from "@/components/banner";
import { Typography } from "@/shared/ui/typography";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import FilterMobile from "@/components/filter-mobile/FilterMobile";
// import { FeedbackForm } from "@/components/feedback-form";
import s from "./ProductsPage.module.scss";
import { ResponseProductsByCategory } from "@/api/products/products.types";
import { CategoriesBreadcrumbs } from "@/api/categories/categories.types";
import { ContentItem } from "@/api/content/content.types";

export const ProductsPage = ({
  productsList,
  breadcrumbs,
  secondBanner,
  page,
}: {
  productsList: ResponseProductsByCategory | undefined;
  breadcrumbs: { data: CategoriesBreadcrumbs } | undefined;
  secondBanner: ContentItem[] | undefined;
  page: string;
}) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography
          variant={!isMobile ? "h1" : "h2"}
          as={!isMobile ? "h1" : "h2"}
        >
          {breadcrumbs?.data.name}
        </Typography>
        <div className={s.products}>
          {!!productsList?.data && (
            <>
              {!isMobile ? (
                <ProductsFilter filtersData={productsList?.data.filters} />
              ) : (
                <FilterMobile filtersData={productsList?.data.filters} />
              )}
              <ProductContent
                products={productsList?.data?.products}
                page={page}
              />
            </>
          )}
        </div>
      </div>
      {!!secondBanner && <Banner secondBanner={secondBanner} />}
      {/* <FeedbackForm /> */}
    </div>
  );
};
