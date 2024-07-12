import { Course } from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getCourses = async (): Promise<Course[]> => {
  const response = await axiosInstance.get(Endpoints.getCourses);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getCourse = async (id: string): Promise<Course> => {
  const response = await axiosInstance.get(Endpoints.getCourse(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getMyCourses = async (auth: PrivateAuth): Promise<Course[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getMyCourses);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
