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
          url: "/v1/users/settings",
        }),
      }),
      changeSetting: builder.mutation<void, ChangeSettingParams>({
        invalidatesTags: ["Setting"],
        query: (args) => ({
          url: "/v1/users/settings",
          method: "PUT",
          body: { ...args },
        }),
      }),
      getUserOrders: builder.query<GetOrdersResponse, void>({
        providesTags: ["Orders"],
        query: () => ({
          url: "/v1/users/orders",
        }),
      }),
      getUserGifts: builder.query<{ data: GetGiftsReponse }, void>({
        query: () => ({
          url: "/v1/users/gifts",
        }),
      }),
      changePassword: builder.mutation<void, ChangePasswordParams>({
        query: (args) => ({
          url: "/v1/users/settings/password",
          method: "PUT",
          body: { ...args },
        }),
      }),
      deleteUser: builder.mutation<void, void>({
        query: () => ({
          url: "/v1/users",
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
