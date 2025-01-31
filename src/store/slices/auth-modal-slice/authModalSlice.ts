import { createSlice } from "@reduxjs/toolkit";

interface AuthModalState {
  isOpen: boolean;
}

const initialState: AuthModalState = {
  isOpen: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleLoginModal } = authModalSlice.actions;
export default authModalSlice.reducer;
