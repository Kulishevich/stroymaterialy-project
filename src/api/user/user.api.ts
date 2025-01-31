import { domixApi } from "../domix.api";
import {
  ChangePasswordParams,
  ChangeSettingParams,
  UserSettingResponse,
} from "./user.types";

export const userApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUserSetting: builder.query<{ data: UserSettingResponse }, void>({
        query: () => ({
          url: "/users/settings",
        }),
      }),
      changeSetting: builder.mutation<void, ChangeSettingParams>({
        query: (args) => ({
          url: "/auth/settings",
          method: "PUT",
          body: { ...args },
        }),
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getUserOrders: builder.query<any, void>({
        query: () => ({
          url: "/users/orders",
        }),
      }),
      getUserGifts: builder.query<{ data: UserSettingResponse }, void>({
        query: () => ({
          url: "/users/gifts",
        }),
      }),
      changePassword: builder.mutation<void, ChangePasswordParams>({
        query: (args) => ({
          url: "/auth/settings/password",
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
