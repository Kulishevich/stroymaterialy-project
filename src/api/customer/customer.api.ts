import { domixApi } from "../domix.api";
import { CustomerArgs, CustomerResponse } from "./customer.types";

export const customerApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      createCustomer: builder.mutation<
        { data: CustomerResponse },
        CustomerArgs
      >({
        query: (args) => ({
          url: "/customers",
          method: "POST",
          body: { ...args },
        }),
      }),
    };
  },
});

export const { useCreateCustomerMutation } = customerApi;
