import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import basketReducer from "./basketSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
