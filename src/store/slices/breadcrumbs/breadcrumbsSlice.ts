import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Breadcrumb {
  uuid: string;
  name: string;
  is_subcategory?: boolean;
}

interface BreadcrumbsState {
  breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbsState = {
  breadcrumbs: [],
};

const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumbs: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
    clearBreadcrumbs: (state) => {
      state.breadcrumbs = [];
    },
  },
});

export const { setBreadcrumbs, clearBreadcrumbs } = breadcrumbsSlice.actions;
export default breadcrumbsSlice.reducer;
