import { put } from 'redux-saga/effects';
import * as action_type from './Constant';
import { getAllMoviesList } from '../Service/service';

export function* moviesSaga(): Generator<any, any, any> {
  try {
    const result = yield getAllMoviesList(); 
    if(result?.data?.results?.length > 0){
      yield put({ type: action_type.GET_MOVIES_SUCCESS ,data:result?.data?.results});
      return result; 
    }else{
      console.log(result?.message)
    }
  } catch (error: any) {
    yield put({ type: action_type.GET_MOVIES_FAILURE, error: error.message as string });
  }
}

export function* movieDetailsSaga(payload:any): Generator<any, any, any> {
  try {
    if(payload){
      yield put({ type: action_type.GET_MOVIE_DETAILS_SUCCESS ,data:payload});
      return payload; 
    }
  } catch (error: any) {
    yield put({ type: action_type.GET_MOVIE_DETAILS_FAILURE, error: error.message as string });
  }
}



