import { createSlice } from "@reduxjs/toolkit";

const langs = [
  { val: "hy", name: "armenian" },
  { val: "ru", name: "russian" },
];

// const lang = localStorage.getItem("i18nextLng") === "ru" ? "ru" : "hy";
const lang = "ru";

const initialState = [
  langs.find((item) => item.val === lang),
  langs.filter((item) => item.val !== lang),
];

export const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      return [
        langs.find((item) => item.val === action.payload),
        langs.filter((item) => item.val !== action.payload),
      ];
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
