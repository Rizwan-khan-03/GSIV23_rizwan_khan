import * as action_type from './Constant';

interface AuthenticationState {
  loading: boolean;
  redirect: boolean;
  movies: any;
  movie: any;
  error?: string;
}

const initialState: AuthenticationState = {
  loading: false,
  redirect: true,
  movies: null,
  movie: null,
};

export const MoviesReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    case action_type.GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.data,
      };
    case action_type.GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case action_type.GET_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.data,
      };
    case action_type.GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  
    default:
      return state;
  }
};
