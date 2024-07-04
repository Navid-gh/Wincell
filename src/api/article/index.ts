import { Article } from "../../types/apiTypes";
import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getArticles = async (): Promise<Article[]> => {
  const response = await axiosInstance.get(Endpoints.getArticles);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
