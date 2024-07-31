import { SearchResponse } from "../types/apiTypes";
import { PrivateAuth } from "../types/auth";
import axiosInstance, { createPrivateAxios } from "./axiosInstance";
import { Endpoints } from "./endpoints";

type AddTicket = {
  phone: string;
  email: string;
  text: string;
};

// Search
export const searchAll = async (query: string): Promise<SearchResponse> => {
  const response = await axiosInstance.get(Endpoints.searchAll(query));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// images
export const addImage = async (auth: PrivateAuth, data: File[]) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addImages, data);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

// ticket
export const addTicket = async (data: AddTicket) => {
  // const response = await axiosInstance.get(Endpoints.searchAll(query));
  // if (response.status === 200) {
  //   return response.data;
  // } else {
  //   throw new Error(response.statusText);
  // }
};
