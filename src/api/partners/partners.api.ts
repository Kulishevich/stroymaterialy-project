import { domixApi } from "../domix.api";
import {
  CreatePartnerArgs,
  CreatePartnerExistUserArgs,
  CreatePartnerResponse,
  GetPartnerResponse,
} from "./partners.types";

export const partnersApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getPartner: builder.query<GetPartnerResponse, void>({
        query: () => ({
          url: "/partners/users",
        }),
      }),
      createPartner: builder.mutation<CreatePartnerResponse, CreatePartnerArgs>(
        {
          query: (args) => ({
            url: "/partners",
            method: "POST",
            body: { ...args },
          }),
        }
      ),
      createPartnerExistUser: builder.mutation<
        CreatePartnerResponse,
        CreatePartnerExistUserArgs
      >({
        query: (args) => ({
          url: "/parners/users",
          method: "POST",
          body: { ...args },
        }),
      }),
      createPartnerFile: builder.mutation<void, FormData>({
        query: (args) => ({
          url: "/partners/certificate",
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
