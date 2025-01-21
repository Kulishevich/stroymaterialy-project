import { domixApi } from "../domix.api";
import {
  Product,
  RequestParams,
  ResponseProductsByCategory,
} from "./products.types";

export const productsApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getProductsByCategory: builder.query<
        ResponseProductsByCategory,
        RequestParams
      >({
        query: ({ id, perPage }) => ({
          url: `/categories/${id}/products?perPage=${perPage}`,
        }),
      }),
      getProduct: builder.query<{ data: Product }, RequestParams>({
        query: ({ id, perPage }) => ({
          url: `/products/${id}?perPage=${perPage}`,
        }),
      }),
      getTrendsProducts: builder.query<
        { data: Product[] },
        { trend: string; perPage: number }
      >({
        query: ({ trend, perPage }) => ({
          url: `/products/trends/${trend}?perPage=${perPage}`,
        }),
      }),
    };
  },
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductQuery,
  useGetTrendsProductsQuery,
} = productsApi;
