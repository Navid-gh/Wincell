import { Certificate, Course, GetCourses } from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getCourses = async (
  categoryId: GetCourses[0],
  limit: GetCourses[1],
  filter: GetCourses[2]
): Promise<Course[]> => {
  categoryId = categoryId == "" ? undefined : categoryId;
  const response = await axiosInstance.get(
    Endpoints.getCourses(categoryId, limit, filter)
  );
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

export const getMyCertificates = async (
  auth: PrivateAuth
): Promise<Certificate[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getMyCertificates);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const RequestCertificate = async (
  auth: PrivateAuth,
  courseId: string
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addCertificate, {
    courseID: courseId,
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
