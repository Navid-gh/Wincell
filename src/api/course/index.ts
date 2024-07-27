import { Course } from "../../types/apiTypes";
import axiosInstance from "../axiosInstance";
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






