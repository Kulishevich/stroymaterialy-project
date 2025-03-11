import { domixApi } from "../domix.api";
import { ProfessionsArgs } from "./professions.types";

export const professionsApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getProfession: builder.query<{ data: ProfessionsArgs[] }, void>({
        query: () => ({
          url: "/professions",
        }),
      }),
    };
  },
});

export const { useGetProfessionQuery } = professionsApi;
