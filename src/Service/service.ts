import { getRequest } from "./axios/axios";

const AUTH_KEY = "jwtToken";
export const setToken = (Name: any) => localStorage.setItem(AUTH_KEY, Name);
export const getToken = () => localStorage.getItem(AUTH_KEY);
export const clearStorage = (key = "") => localStorage.clear()

export const getAllMoviesList = async () => {
  try {
    const response = await getRequest();
    console.log('response',response);
    
    if (response) {
      return response;
    } else {
      throw new Error('get req error');
    }
  } catch (error) {
    return console.error(error);
  }
}
