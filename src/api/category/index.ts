import { Category } from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getCategories = async (
  type: "course" | "blog" | undefined
): Promise<Category[]> => {
  const response = await axiosInstance.get(Endpoints.getCategories(type));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addCategory = async (
  auth: PrivateAuth,
  title: string,
  type: "course" | "blog"
): Promise<Category> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addCategory, {
    title,
    type,
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const editCategory = async (
  auth: PrivateAuth,
  id: string,
  title: string,
  type: "course" | "blog"
): Promise<Category> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.patch(Endpoints.editCategory(id), {
    title,
    type,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteCategory = async (
  auth: PrivateAuth,
  id: string
): Promise<Category> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteCategory(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
