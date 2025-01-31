import { domixApi } from "../domix.api";
import {
  CreateAddressArgs,
  CreateAddressResponse,
  GetAddressesResponse,
  UpdateAddressArgs,
  UpdateAddressResponse,
} from "./address.types";

export const addressesApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAddresses: builder.query<GetAddressesResponse, { perPage: number }>({
        query: ({ perPage }) => ({
          url: `/users/addresses/?perPage=${perPage}`,
        }),
      }),
      createAddress: builder.mutation<CreateAddressResponse, CreateAddressArgs>(
        {
          query: (args) => ({
            url: "/users/addresses",
            method: "POST",
            body: { ...args },
          }),
        }
      ),
      updateAddress: builder.mutation<
        UpdateAddressResponse,
        { args: UpdateAddressArgs; id: number }
      >({
        query: ({ args, id }) => ({
          url: `/users/addresses/${id}`,
          method: "PUT",
          body: { ...args },
        }),
      }),
      setDefaultAddress: builder.mutation<void, { id: number }>({
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
