import {
  Certificate,
  Chapter,
  Course,
  Episode,
  GetCourses,
} from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

type EditArgs = Pick<
  Course,
  | "Description"
  | "discount"
  | "title"
  | "price"
  | "language"
  | "prerequisitesTxt"
  | "prerequisites"
  | "type"
  | "level"
  | "owner"
  | "images"
  | "sortByNumber"
  | "short_text"
  | "category"
  | "neededTime"
  | "spotPlayerID"
>;

type AddArgs = EditArgs;

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

export const deleteCourse = async (auth: PrivateAuth, id: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteCourse(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addCourse = async (auth: PrivateAuth, data: AddArgs) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addCourse, data);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const editCourse = async (
  auth: PrivateAuth,
  courseId: string,
  data: EditArgs
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.patch(
    Endpoints.editCourse(courseId),
    data
  );
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

export const getAllCertificates = async (): Promise<Certificate[]> => {
  const response = await axiosInstance.get(Endpoints.getCertificates);
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
