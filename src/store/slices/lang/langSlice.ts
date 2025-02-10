import { createSlice } from "@reduxjs/toolkit";

const getInitialLang = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") === "ru" ? "ru" : "hy";
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
        localStorage.setItem("language", action.payload);
      }
      return action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
