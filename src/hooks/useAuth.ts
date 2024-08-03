import axios, { AxiosError } from "axios";
import { logIn, logOut, updateAccessToken } from "../redux/userSlice";
import { useAppSelector } from "./useReduxHooks";
import { useAppDispatch } from "./useReduxHooks";
import useRefreshToken from "./useRefreshToken";
import { getRefreshToken } from "../api/auth";
import { getCookie, removeCookie } from "../utils/cookie";
import { useEffect, useState } from "react";
import { Roles } from "../types/auth";
import { getFromStorage } from "../utils/localStorage";
import { updateProduct } from "../redux/basketSlice";

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
            const res = await getRefreshToken(token);
            dispatch(
              logIn({
                role: res.user.Role[0] as Roles,
                token: res.token,
                data: res.user,
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
      }
      setReady(true);
    };
    getAccess();
  }, []);

  return ready;
};

export const useInitialBasketProducts = () => {
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();
  const value = JSON.parse(getFromStorage("products", []) as string);

  useEffect(() => {
    const setProducts = () => {
      if (Auth && value) {
        dispatch(updateProduct({ productsId: value, qty: value.length ?? 0 }));
      }
    };
    setProducts();
  }, [Auth]);
};
