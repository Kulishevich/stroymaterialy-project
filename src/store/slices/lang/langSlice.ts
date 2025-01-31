import { createSlice } from "@reduxjs/toolkit";

// const langs = ["hy", "ru"];

const getInitialLang = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("i18nextLng") === "ru" ? "ru" : "hy";
  }
  return "hy";
};

const lang = getInitialLang();

const initialState = lang;

export const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("i18nextLng", action.payload);
      }
      return action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
