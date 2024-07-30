import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const register = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}) => {
  const response = await axiosInstance.post(Endpoints.register, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const login = async (phone: string) => {
  const response = await axiosInstance.post(
    Endpoints.logIn,
    { phone },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
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

export const resetCode = async (phone: string) => {
  const response = await axiosInstance.post(Endpoints.resetCode, { phone });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const checkOtp = async (phone: string, code: string) => {
  const response = await axiosInstance.post(Endpoints.checkOtp, {
    phone,
    code,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
