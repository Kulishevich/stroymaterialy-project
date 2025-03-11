import { domixApi } from "../domix.api";
import {
  CreateAddressArgs,
  GetAddressesResponse,
  UpdateAddressArgs,
} from "./address.types";

export const addressesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAddresses: builder.query<GetAddressesResponse, { perPage: number }>({
        providesTags: ["Addresses"],
        query: ({ perPage }) => ({
          url: `/users/addresses/?perPage=${perPage}`,
        }),
      }),
      createAddress: builder.mutation<void, CreateAddressArgs>({
        invalidatesTags: ["Addresses", "Order"],
        query: (args) => ({
          url: "/users/addresses",
          method: "POST",
          body: { ...args },
        }),
      }),
      updateAddress: builder.mutation<
        void,
        { args: UpdateAddressArgs; id: number }
      >({
        invalidatesTags: ["Addresses"],
        query: ({ args, id }) => ({
          url: `/users/addresses/${id}`,
          method: "PUT",
          body: { ...args },
        }),
      }),
      setDefaultAddress: builder.mutation<void, number>({
        query: (id) => ({
          url: `/users/addresses/${id}/set-default`,
          method: "PUT",
        }),
      }),
    };
  },
});

export const {
  useGetAddressesQuery,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useSetDefaultAddressMutation,
} = addressesApi;
