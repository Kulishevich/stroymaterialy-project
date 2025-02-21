import { domixApi } from "../domix.api";
import {
  ChangeOrderArgs,
  ChangeOrderResponse,
  ChangePayMethodResponse,
  CreateOrderItem,
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
        { items: CreateOrderItem[] }
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
      changeOrder: builder.mutation<
        ChangeOrderResponse,
        { args: ChangeOrderArgs; orderId: string }
      >({
        query: ({ args, orderId }) => ({
          url: `/orders/${orderId}/process`,
          method: "PUT",
          body: args,
        }),
      }),
      changePayMethod: builder.mutation<
        ChangePayMethodResponse,
        { id: string; method: string }
      >({
        query: ({ id, method }) => ({
          url: `/orders/${id}/pay/${method}`,
          method: "POST",
        }),
      }),
      deleteOrder: builder.mutation<void, { id: string }>({
        invalidatesTags: ["Orders"],
        query: ({ id }) => ({
          url: `/orders/${id}`,
          method: "DELETE",
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      checkOrder: builder.mutation<any, any>({
        query: ({ id, data }) => ({
          url: `/orders/${id}/check/details`,
          method: "POST",
          body: data,
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
  useChangePayMethodMutation,
  useDeleteOrderMutation,
  useCheckOrderMutation,
} = ordersApi;
