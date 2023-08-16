import axios from "axios";
import { getToken } from "../service";
import { ApiConfig } from "../../apiConfig/apiEndPoints";
const axiosClient = axios.create();

// --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmUxYzVhMjMyNTNjNThhNWRhNWJjYjQ4OWQ4NGMxYiIsInN1YiI6IjY0ZGNhNTFiMDAxYmJkMDQxYzhmY2UyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yRUzqKTtgOjOkTWKRffLcjudtDH8fIetHZiGns2OzU' \
// --header 'accept: application/json'


const AUTH_HEADERS = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmUxYzVhMjMyNTNjNThhNWRhNWJjYjQ4OWQ4NGMxYiIsInN1YiI6IjY0ZGNhNTFiMDAxYmJkMDQxYzhmY2UyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yRUzqKTtgOjOkTWKRffLcjudtDH8fIetHZiGns2OzU`,
    }
  }
}

axiosClient.interceptors.response.use(
  (response: any) => response,
  (error: any) => error
);

export const getRequest = () => axiosClient.get(`${ApiConfig?.baseURL}`, AUTH_HEADERS()).then((response: any) => response);

export default axiosClient;
