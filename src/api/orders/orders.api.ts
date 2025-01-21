import { domixApi } from "../domix.api";
import { ExtraOptionsArgs } from "./orders.types";

export const ordersApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getExtraOptions: builder.query<{ data: ExtraOptionsArgs[] }, void>({
        query: () => ({
          url: "/orders/extra-options",
        }),
      }),
    };
  },
});

export const { useGetExtraOptionsQuery } = ordersApi;
