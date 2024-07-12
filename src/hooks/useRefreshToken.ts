import { getRefreshToken } from "../api/auth";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await getRefreshToken();
    return response.singToken;
  };
  return refresh;
};

export default useRefreshToken;
