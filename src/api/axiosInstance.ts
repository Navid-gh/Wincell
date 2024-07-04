import axios, {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
// import { PrivateAuth } from "../Types/reqAuth";

export const BASE_URL = "http://127.0.0.1:3000";

export default axios.create({
  baseURL: BASE_URL,
});

// export const createPrivateAxios = ({
//   refresh,
//   token,
//   updateAccessToken,
//   dispatch,
// }: PrivateAuth) => {
//   const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     // withCredentials: true,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   axiosPrivate.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       if (!config!.headers!["Authorization"]) {
//         config!.headers!["Authorization"] = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error: AxiosError) => Promise.reject(error)
//   );

//   axiosPrivate.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error: AxiosError) => {
//       if (error?.response?.status === 401) {
//         try {
//           const newAccessToken = await refresh();
//           error!.config!.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           dispatch(updateAccessToken({ token: newAccessToken }));
//           return axiosPrivate.request(error.config!);
//         } catch (refreshError) {
//           // Handle token refresh error (e.g., logout the user)
//           console.log(refreshError);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
//   return axiosPrivate;
// };
