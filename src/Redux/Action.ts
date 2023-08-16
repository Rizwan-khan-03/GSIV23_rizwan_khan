import * as action_type from './Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const  getMoviesRequest = (callback:any)=> {
  return {
    type: action_type.GET_MOVIES_REQUEST,
    callback,
    
  };
};
export const getMoviesSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.GET_MOVIES_SUCCESS,
    payload: payload,
  };
};

export const getMoviesFailure = (error: string): Action<string> => {
  return {
    type: action_type.GET_MOVIES_FAILURE,
    payload: error
  };
};
export const  getMovieDetailsRequest = (id:any,callback:any)=> {
  return {
    type: action_type.GET_MOVIE_DETAILS_REQUEST,
    id,
    callback,
    
  };
};
// call inside mobilesaga 
export const MovieDetailsSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.GET_MOVIE_DETAILS_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILEDETAILSsaga 
export const MovieDetailsFailure = (error: string): Action<string> => {
  return {
    type: action_type.GET_MOVIE_DETAILS_FAILURE,
    payload: error
  };
};

