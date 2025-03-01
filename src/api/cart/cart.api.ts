import { domixApi } from "../domix.api";
import { AddItemArgs, CartResponse } from "./cart.types";

export const cartApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCart: builder.query<CartResponse, void>({
        providesTags: ["Cart"],
        query: () => ({
          url: "/v1/carts",
        }),
      }),
      clearCart: builder.mutation<CartResponse, void>({
        invalidatesTags: ["Cart"],
        query: () => ({
          url: "/v1/carts",
          method: "DELETE",
        }),
      }),
      addItemCart: builder.mutation<CartResponse, AddItemArgs>({
        invalidatesTags: ["Cart"],
        query: (args) => ({
          url: "/v1/carts/add",
          method: "POST",
          body: { ...args },
        }),
      }),
      removeItemCart: builder.mutation<CartResponse, { id: string }>({
        invalidatesTags: ["Cart"],
        query: ({ id }) => ({
          url: `/v1/carts/${id}`,
          method: "DELETE",
        }),
      }),
      changeCounterItemCart: builder.mutation<void, AddItemArgs>({
        invalidatesTags: ["Cart"],
        query: (args) => ({
          url: "/v1/carts/change",
          method: "POST",
          body: { ...args },
        }),
      }),
    };
  },
});

export const {
  useGetCartQuery,
  useClearCartMutation,
  useAddItemCartMutation,
  useRemoveItemCartMutation,
  useChangeCounterItemCartMutation,
} = cartApi;
