import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setToStorage } from "../utils/localStorage";

export interface BasketState {
  productsId: string[];
  qty: number;
}

type AddPayload = {
  id: string;
};
type UpdatePayload = BasketState;

type RemovePayload = {
  id: string;
};

const initialState: BasketState = {
  productsId: [],
  qty: 0,
};

export const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<AddPayload>) => {
      const newId = action.payload.id;
      state.productsId.find((id) => id === newId) ||
        state.productsId.push(newId);
      state.qty += 1;

      setToStorage("products", JSON.stringify(state.productsId));
    },
    removeProduct: (state, action: PayloadAction<RemovePayload>) => {
      state.productsId = state.productsId.filter(
        (id) => id !== action.payload.id
      );
      state.qty -= 1;
      setToStorage("products", JSON.stringify(state.productsId));
    },
    updateProduct: (state, action: PayloadAction<UpdatePayload>) => {
      state.productsId = action.payload.productsId;
      state.qty = action.payload.qty;
    },
  },
});
export const { addToBasket, updateProduct, removeProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
