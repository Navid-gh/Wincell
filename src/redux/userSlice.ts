import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../types/auth";
import { User } from "../types/apiTypes";
export interface UserState {
  Auth: boolean;
  token: string;
  role: Roles;
  data: User;
}
const initialState: UserState = {
  Auth: false,
  token: "",
  role: "GUEST",
  data: {} as User,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<Omit<UserState, "Auth">>) => {
      state.Auth = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.data = action.payload.data;
    },
    logOut: (state) => {
      state.Auth = false;
      state.token = "";
      state.role = "GUEST";
      state.data = {} as User;
    },
    updateAccessToken: (
      state,
      action: PayloadAction<Pick<UserState, "token">>
    ) => {
      state.token = action.payload.token;
    },
  },
});

export const { logIn, logOut, updateAccessToken } = userSlice.actions;
export default userSlice.reducer;
