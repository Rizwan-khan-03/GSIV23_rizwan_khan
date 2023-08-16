import axios from "axios";
import { getToken } from "../service";
import { ApiConfig } from "../../apiConfig/apiEndPoints";
const axiosClient = axios.create();


const AUTH_HEADERS = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
      token: `Bearer ${getToken()}`,
    }
  }
}

axiosClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => error
);

export const getRequest = (URL: string) => axiosClient.get(`${ApiConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response: any) => response);

export default axiosClient;
