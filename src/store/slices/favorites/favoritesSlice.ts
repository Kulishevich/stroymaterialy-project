import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: string[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { setFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
