import { domixApi } from "../domix.api";
import {
  ChangeOrderResponse,
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
      createOrder: builder.mutation<
        { data: CreateOrderResponse },
        { items: CreateOrderArgs }
      >({
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      changeOrder: builder.mutation<ChangeOrderResponse, any>({
        query: ({ args, orderId }) => ({
          url: `/orders/${orderId}/process`,
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
  useChangeOrderMutation,
} = ordersApi;
