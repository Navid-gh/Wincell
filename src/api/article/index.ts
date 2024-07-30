import { Article, GetArticles } from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

type EditArgs = Pick<
  Article,
  | "title"
  | "description"
  | "author"
  | "short_text"
  | "category"
  | "images"
  | "sortByNumber"
>;

type AddArgs = EditArgs;

export const getArticles = async (
  categoryId: GetArticles[0],
  limit: GetArticles[1],
  filter: GetArticles[2]
): Promise<Article[]> => {
  const response = await axiosInstance.get(
    Endpoints.getArticles(categoryId, limit, filter)
  );
  if (response.status === 200) {
    return response.data.result;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteArticle = async (auth: PrivateAuth, id: string) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.delete(Endpoints.deleteArticle(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const addArticle = async (auth: PrivateAuth, data: AddArgs) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.post(Endpoints.addArticle, data);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const editArticle = async (
  auth: PrivateAuth,
  articleID: string,
  data: EditArgs
) => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.put(
    Endpoints.editArticle(articleID),
    data
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getArticle = async (id: string): Promise<Article> => {
  const response = await axiosInstance.get(Endpoints.getArticle(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
