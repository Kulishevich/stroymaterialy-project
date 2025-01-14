import React from "react";
import s from "./ProductsPage.module.scss";
import { ProductsFilter } from "../products-filter";
import { ProductContent } from "../products-content";
import { FeedbackForm } from "@/components/feedback-form";
import { Banner } from "@/components/banner";

export const ProductsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.products}>
        <ProductsFilter />
        <ProductContent />
      </div>
      <Banner />
      <FeedbackForm />
    </div>
  );
};
