import { PrivateAuth } from "../../types/auth";
import { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const updateBasket = async (auth: PrivateAuth, ids: string[]) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.updateBasket, {
    bascket: ids,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const Payment = async (auth: PrivateAuth, ids: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.payment, { bascket: ids });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};


