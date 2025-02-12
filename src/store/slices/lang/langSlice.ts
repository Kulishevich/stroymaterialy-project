import { createSlice } from "@reduxjs/toolkit";

const getInitialLang = () => {
  if (typeof window !== "undefined") {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    return cookies.locale || "hy";
  }
  return "hy";
};

const initialState = getInitialLang();

export const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      if (typeof window !== "undefined") {
        document.cookie = `locale=${action.payload}; path=/; max-age=31536000`;
      }
      return action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
