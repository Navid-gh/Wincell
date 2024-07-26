import { Category } from "../../types/apiTypes";
import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getCategories = async (
  type: "course" | "article" | ""
): Promise<Category[]> => {
  const response = await axiosInstance.get(Endpoints.getCategories(type));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
