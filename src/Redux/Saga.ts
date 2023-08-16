import { put } from 'redux-saga/effects';
import * as action_type from './Constant';
import { getAllMoviesList } from '../Service/service';

export function* moviesSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield getAllMoviesList(); 
    if(result?.data?.success){
      payload.callback(result?.data)
      yield put({ type: action_type.GET_MOVIES_SUCCESS ,data:result?.data});
      return result; 
    }else{
      console.log(result?.message)
    }
  } catch (error: any) {
    yield put({ type: action_type.GET_MOVIES_FAILURE, error: error.message as string });
  }
}
// export function* movieDetailsSaga(payload: any): Generator<any, any, any> {
//   try {
//     const result = yield getMobileDetails(payload?.id); 
    
//     if(result?.data?.success){
//       payload.callback(result?.data)
//       yield put({ type: action_type.GET_MOVIE_DETAILS_SUCCESS ,data:result?.data.payload});
//       return result; 
//     }else{
//       console.log(result?.message)
//     }
//   } catch (error: any) {
//     yield put({ type: action_type.GET_MOVIE_DETAILS_FAILURE, error: error.message as string });
//   }
// }


