import { Banner } from "@/components/banner";
import { CatalogWithBanners } from "@/components/catalog-with-banners";
import { CompanyContacts } from "@/components/company-contacts";
import { FeedbackForm } from "@/components/feedback-form";
import { LatestCompanyPromotions } from "@/features/About/latest-company-promotions";
import { ProductCatalog } from "@/components/product-catalog";
import React from "react";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={s.container}>
      <CatalogWithBanners />
      <ProductCatalog />
      <LatestCompanyPromotions />
      <CompanyContacts />
      <Banner />
      <FeedbackForm />
    </div>
  );
};
