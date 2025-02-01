import { LinksTypes, MetaTypes } from "@/shared/types/types";
import { Filters, Product, ProductCategory } from "../products/products.types";

export type GetSearchItemsResponse = {
  errors: boolean;
  message: string;
  data: {
    products: {
      data: {
        data: Product[];
        links: LinksTypes;
        meta: MetaTypes;
      };
      filters: Filters;
    };
    categories: {
      data: {
        data: ProductCategory[];
      };
    };
  };
};
