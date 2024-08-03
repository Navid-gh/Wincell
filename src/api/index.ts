import { SearchResponse, Ticket } from "../types/apiTypes";
import { PrivateAuth } from "../types/auth";
import axiosInstance, { createPrivateAxios } from "./axiosInstance";
import { Endpoints } from "./endpoints";

type AddTicket = {
  phone: string;
  title: string;
  desc: string;
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
export const addImage = async (
  auth: PrivateAuth,
  images: File[]
): Promise<string[]> => {
  const privateAxios = createPrivateAxios(auth);
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  const response = await privateAxios.post(Endpoints.addImages, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response.status === 201) {
    return response.data.urlImage;
  } else {
    throw new Error(response.statusText);
  }
};

// ticket
export const addTicket = async (data: AddTicket) => {
  const response = await axiosInstance.post(Endpoints.addTicket, data);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getAllTickets = async (auth: PrivateAuth): Promise<Ticket[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getAllTickets);
  if (response.status === 200) {
    return response.data.readTikets;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteTicket = async (auth: PrivateAuth, ticketId: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteTicket(ticketId));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
