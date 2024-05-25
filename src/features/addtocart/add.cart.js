import { createSlice } from "@reduxjs/toolkit";

const addTocart = createSlice({
  name: "addTocart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      return [...state, action.payload];
    },
  },
});
export default addTocart.reducer;
export const { addCart } = addTocart.actions;
