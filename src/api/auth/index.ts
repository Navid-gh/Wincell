import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const login = async (data: { code: string; phone: string }) => {
  const response = await axiosInstance.post(Endpoints.logIn, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
export const getRefreshToken = async () => {
  const response = await axiosInstance.post(Endpoints.refreshToken, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
