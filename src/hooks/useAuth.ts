import axios, { AxiosError } from "axios";
import { logIn, logOut, updateAccessToken } from "../redux/userSlice";
import { useAppSelector } from "./useReduxHooks";
import { useAppDispatch } from "./useReduxHooks";
import useRefreshToken from "./useRefreshToken";
import { getRefreshToken } from "../api/auth";
import { getCookie, removeCookie } from "../utils/cookie";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const user = useAppSelector((state) => state.user);
  return user;
};

export const useAuthHooks = () => {
  const dispatch = useAppDispatch();
  const refresh = useRefreshToken();
  return { updateAccessToken, dispatch, refresh };
};

export const useInitialAuth = () => {
  const [ready, setReady] = useState(false);
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();

  useEffect(() => {
    const getAccess = async () => {
      const token = getCookie("win_token");
      if (token) {
        if (!Auth) {
          try {
            const res = await getRefreshToken();
            dispatch(
              logIn({
                role: res.Role,
                token: res.singToken,
                data: res.findUser,
              })
            );
          } catch (error) {
            const errors = error as Error | AxiosError;
            console.log(error);
            if (!axios.isAxiosError(errors)) {
            } else {
              if (errors?.response?.status === 401) {
                removeCookie("win_token");
                dispatch(logOut());
                window.location.replace("/Login");
              }
            }
          } finally {
            setReady(true);
          }
        }
      } else {
        if (Auth) {
          dispatch(logOut());
        }
        setReady(true);
      }
    };
    getAccess();
  }, []);

  return ready;
};
