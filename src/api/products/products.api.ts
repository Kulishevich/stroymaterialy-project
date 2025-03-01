import { domixApi } from "../domix.api";
import {
  addInFavoriteArgs,
  addInFavoriteResponse,
  CreatePriceOffer,
  GetFavotireResponse,
  PriceOffer,
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
        query: ({ id, perPage, page, filters }) => ({
          url: `/v1/categories/${id}/products?perPage=${perPage}&page=${page}${filters}`,
        }),
      }),
      getProduct: builder.query<{ data: Product }, { id: string }>({
        query: ({ id }) => ({
          url: `/v1/products/${id}`,
        }),
      }),
      getTrendsProducts: builder.query<
        { data: Product[] },
        { trend: string; perPage: number }
      >({
        query: ({ trend, perPage }) => ({
          url: `/v1/products/trends/${trend}?perPage=${perPage}`,
        }),
      }),
      getFavoriteProducts: builder.query<{ data: GetFavotireResponse }, void>({
        providesTags: ["Favorites"],
        query: () => ({
          url: "/v1/products/favorites",
        }),
      }),
      addInFavorite: builder.mutation<
        { data: addInFavoriteResponse },
        addInFavoriteArgs
      >({
        invalidatesTags: ["Favorites"],
        query: (args) => ({
          url: "/v1/products/favorites",
          method: "POST",
          body: { ...args },
        }),
      }),
      deleteFavorite: builder.mutation<void, string>({
        invalidatesTags: ["Favorites"],
        query: (id) => ({
          url: `/v1/products/favorites/${id}`,
          method: "DELETE",
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getRating: builder.query<any, string>({
        query: (id) => ({
          url: `/v1/products/${id}/ratings`,
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addRating: builder.mutation<any, { args: any; id: string }>({
        query: ({ args, id }) => ({
          url: `/v1/products/${id}/ratings`,
          method: "POST",
          body: { ...args },
        }),
      }),
      getPriceOffers: builder.query<{ data: PriceOffer[] }, void>({
        query: () => ({
          url: "/v1/products/price-requests",
        }),
      }),
      createPriceOffer: builder.mutation<void, CreatePriceOffer[]>({
        query: (body) => ({
          url: "/v1/products/price-requests",
          method: "POST",
          body: { items: body },
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
  useDeleteFavoriteMutation,
  useGetRatingQuery,
  useAddRatingMutation,
  useGetPriceOffersQuery,
  useCreatePriceOfferMutation,
} = productsApi;
