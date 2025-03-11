import { domixApi } from "../domix.api";
import { CreateGiftArgs, CreateGiftResponse } from "./gift.types";

export const giftApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      createGift: builder.mutation<
        { data: CreateGiftResponse },
        CreateGiftArgs
      >({
        query: (args) => ({
          url: "/gifts",
          method: "POST",
          body: { ...args },
        }),
      }),
    };
  },
});

export const { useCreateGiftMutation } = giftApi;
