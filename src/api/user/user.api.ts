import { domixApi } from "../domix.api";
import {
  ChangePasswordParams,
  ChangeSettingParams,
  GetGiftsReponse,
  GetOrdersResponse,
  UserSettingResponse,
} from "./user.types";

export const userApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUserSetting: builder.query<{ data: UserSettingResponse }, void>({
        providesTags: ["Setting"],
        query: () => ({
          url: "/users/settings",
        }),
      }),
      changeSetting: builder.mutation<void, ChangeSettingParams>({
        invalidatesTags: ["Setting"],
        query: (args) => ({
          url: "/users/settings",
          method: "PUT",
          body: { ...args },
        }),
      }),
      getUserOrders: builder.query<GetOrdersResponse, void>({
        query: () => ({
          url: "/users/orders",
        }),
      }),
      getUserGifts: builder.query<{ data: GetGiftsReponse }, void>({
        query: () => ({
          url: "/users/gifts",
        }),
      }),
      changePassword: builder.mutation<void, ChangePasswordParams>({
        query: (args) => ({
          url: "/users/settings/password",
          method: "PUT",
          body: { ...args },
        }),
      }),
      deleteUser: builder.mutation<void, void>({
        query: () => ({
          url: "/users",
          method: "DELETE",
        }),
      }),
    };
  },
});

export const {
  useGetUserSettingQuery,
  useChangeSettingMutation,
  useGetUserOrdersQuery,
  useGetUserGiftsQuery,
  useDeleteUserMutation,
  useChangePasswordMutation,
} = userApi;
