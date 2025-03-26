import { login } from "@/store/slices/auth/authSlice";
import { domixApi } from "../domix.api";
import {
  LoginArgs,
  LoginResponce,
  SignUpArgs,
  SignUpResponce,
} from "./auth.types";

export const authApi = domixApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponce, LoginArgs>({
        async onQueryStarted(_, { queryFulfilled, dispatch }) {
          try {
            const { data } = await queryFulfilled;

            const accessToken = await data.data.token.trim();

            dispatch(login(accessToken));
          } catch (e) {
            console.error(e, "Error in login: builder.mutation");
          }
        },
        query: (args) => ({
          body: { ...args },
          method: "POST",
          url: "/auth/login/user",
        }),
      }),
      signUp: builder.mutation<SignUpResponce, SignUpArgs>({
        async onQueryStarted(_, { queryFulfilled, dispatch }) {
          try {
            const { data } = await queryFulfilled;

            document.cookie = `accessToken=${data.data.token.trim()}; 
            path=/; 
            max-age=${7 * 24 * 60 * 60}; 
            secure; 
            samesite=lax`;

            dispatch(login(data.data.token.trim()));
          } catch (e) {
            console.error(e, "Error in login: builder.mutation");
          }
        },
        query: (args) => ({
          body: { ...args },
          method: "POST",
          url: "/auth/sign-up",
        }),
      }),
    };
  },
});

export const { useLoginMutation, useSignUpMutation } = authApi;
