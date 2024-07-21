import { Comment } from "../../types/apiTypes";
import { PrivateAuth } from "../../types/auth";
import { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getMyComments = async (auth: PrivateAuth): Promise<Comment[]> => {
  const privateAxios = createPrivateAxios(auth);
  const response = await privateAxios.get(Endpoints.getMyComments);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
