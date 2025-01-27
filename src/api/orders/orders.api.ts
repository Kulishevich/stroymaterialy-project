import { domixApi } from "../domix.api";
import {
  CreateOrderArgs,
  CreateOrderResponse,
  ExtraOptionsResponse,
  GetOrderResponse,
} from "./orders.types";

export const ordersApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getExtraOptions: builder.query<{ data: ExtraOptionsResponse[] }, void>({
        query: () => ({
          url: "/orders/extra-options",
        }),
      }),
      createOrder: builder.mutation<CreateOrderResponse, CreateOrderArgs>({
        query: (args) => ({
          url: "/orders",
          method: "POST",
          body: { ...args },
        }),
      }),
      getOrder: builder.query<GetOrderResponse, { id: string }>({
        query: ({ id }) => ({
          url: `/orders/${id}`,
        }),
      }),
      changeOrder: builder.mutation({
        query: ({ args }) => ({
          url: "/orders/process",
          method: "PUT",
          body: { ...args },
        }),
      }),
    };
  },
});

export const {
  useGetExtraOptionsQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
} = ordersApi;
