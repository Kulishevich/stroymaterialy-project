import { Banner } from "@/components/banner";
import { CatalogWithBanners } from "@/components/catalog-with-banners";
import { CompanyContacts } from "@/components/company-contacts";
// import { FeedbackForm } from "@/components/feedback-form";
import { LatestCompanyPromotions } from "@/features/About/latest-company-promotions";
import { ProductCatalog } from "@/components/product-catalog";
import React from "react";
import s from "./HomePage.module.scss";
import { ContentItem } from "@/api/content/content.types";
import { CategoryArgs } from "@/api/categories/categories.types";
import { Product } from "@/api/products/products.types";

type HomePageProps = {
  discounts: ContentItem[];
  banner: ContentItem[];
  secondBanner: ContentItem[];
  categories: { data: CategoryArgs[] };
  products: { data: Product[] };
};

export const  HomePage = ({
  discounts,
  banner,
  categories,
  products,
  secondBanner,
}: HomePageProps) => {
  return (
    <div className={s.container}>
      <CatalogWithBanners
        discounts={discounts}
        banner={banner}
        categories={categories}
      />
      <ProductCatalog products={products} />
      <LatestCompanyPromotions discounts={discounts} />
      <CompanyContacts />
      <Banner secondBanner={secondBanner} />
      {/* <FeedbackForm /> */}
    </div>
  );
};
