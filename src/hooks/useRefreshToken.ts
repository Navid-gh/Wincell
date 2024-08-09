import { getRefreshToken } from "../api/auth";
import { getCookie } from "../utils/cookie";

const useRefreshToken = () => {
  const refresh = async () => {
    const token = getCookie("win_token");
    const response = await getRefreshToken(token!);
    return response.token;
  };
  return refresh;
};

export default useRefreshToken;
