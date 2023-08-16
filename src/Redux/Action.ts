import * as action_type from './Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const  getMoviesRequest = ()=> {  
  return {
    type: action_type.GET_MOVIES_REQUEST,
    
  };
};
export const setMovieDetails = (payload:any): Action<undefined> => {
  return {
    type: action_type.GET_MOVIE_DETAILS_REQUEST,
    payload: payload,
  };
};

