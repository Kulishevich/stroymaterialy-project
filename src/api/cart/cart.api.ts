import { domixApi } from "../domix.api";
import { AddItemArgs, CartResponse } from "./cart.types";

export const cartApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCart: builder.query<CartResponse, void>({
        query: () => ({
          url: "/carts",
        }),
      }),
      clearCart: builder.mutation<CartResponse, void>({
        query: () => ({
          url: "/carts",
          method: "DELETE",
        }),
      }),
      addItemCart: builder.mutation<CartResponse, AddItemArgs>({
        query: (args) => ({
          url: "/carts/add",
          method: "POST",
          body: { ...args },
        }),
      }),
      removeItemCart: builder.mutation<CartResponse, { id: string }>({
        query: ({ id }) => ({
          url: `/carts/${id}`,
          method: "DELETE",
        }),
      }),
      changeCounterItemCart: builder.mutation<void, AddItemArgs>({
        query: (args) => ({
          url: "/carts/change",
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
