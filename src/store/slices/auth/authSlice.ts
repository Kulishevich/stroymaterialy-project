import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token:
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("accessToken", action.payload);
      document.cookie = `accessToken=${action.payload}; path=/;max-age=${
        365 * 24 * 60 * 60
      }; secure; samesite=lax`;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("accessToken");
      document.cookie =
        "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
