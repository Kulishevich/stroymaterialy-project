import { domixApi } from "../domix.api";
import { GetAddressesResponse } from "./address.types";

export const addressesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAddresses: builder.query<GetAddressesResponse, { perPage: number }>({
        query: ({ perPage }) => ({
          url: `/users/addresses/?perPage=${perPage}`,
        }),
      }),
    };
  },
});

export const { useGetAddressesQuery } = addressesApi;
