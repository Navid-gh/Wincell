import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { UserState } from "../redux/userSlice";
import { useAppDispatch } from "../hooks/useReduxHooks";

export type PrivateAuth = {
  token: string;
  refresh: () => Promise<any>;
  updateAccessToken: ActionCreatorWithPayload<Pick<UserState, "token">>;
  dispatch: ReturnType<typeof useAppDispatch>;
};

export type Roles = "USER" | "ADMIN" | "GUEST";
