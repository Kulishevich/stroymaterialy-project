import { domixApi } from "../domix.api";
import { CreatePartnerResponse, GetPartnerResponse } from "./partners.types";

export const partnersApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPartner: builder.query<GetPartnerResponse, void>({
        query: () => ({
          url: "/v1/partners/users",
        }),
      }),
      createPartner: builder.mutation<CreatePartnerResponse, FormData>({
        query: (formData) => ({
          url: "/v1/partners",
          method: "POST",
          body: formData,
        }),
      }),
      createPartnerExistUser: builder.mutation<CreatePartnerResponse, FormData>(
        {
          query: (formData) => ({
            url: "/v1/partners/users",
            method: "POST",
            body: formData,
          }),
        }
      ),
      createPartnerFile: builder.mutation<void, FormData>({
        query: (args) => ({
          url: "/v1/partners/certificate",
          method: "POST",
          body: { ...args },
        }),
      }),
    };
  },
});

export const {
  useGetPartnerQuery,
  useCreatePartnerMutation,
  useCreatePartnerExistUserMutation,
  useCreatePartnerFileMutation,
} = partnersApi;
