import { domixApi } from "../domix.api";
import {
  addInFavoriteArgs,
  addInFavoriteResponse,
  GetFavotireResponse,
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
      getFavoriteProducts: builder.query<{ data: GetFavotireResponse }, void>({
        query: () => ({
          url: "/products/favorites",
        }),
      }),
      addInFavorite: builder.mutation<
        { data: addInFavoriteResponse },
        addInFavoriteArgs
      >({
        query: (args) => ({
          url: "/products/favorites",
          method: "POST",
          body: { ...args },
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getRating: builder.query<any, { id: string }>({
        query: (id) => ({
          url: `/products/${id}/ratings`,
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addRating: builder.mutation<any, { args: any; id: string }>({
        query: ({ args, id }) => ({
          url: `/products/${id}/ratings`,
          method: "POST",
          body: { ...args },
        }),
      }),
    };
  },
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductQuery,
  useGetTrendsProductsQuery,
  useGetFavoriteProductsQuery,
  useAddInFavoriteMutation,
  useGetRatingQuery,
  useAddRatingMutation,
} = productsApi;
