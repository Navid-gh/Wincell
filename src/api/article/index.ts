import { Article, GetArticles } from "../../types/apiTypes";
import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getArticles = async (
  categoryId: GetArticles[0],
  limit: GetArticles[1],
  filter: GetArticles[2]
): Promise<Article[]> => {
  const response = await axiosInstance.get(
    Endpoints.getArticles(categoryId, limit, filter)
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
