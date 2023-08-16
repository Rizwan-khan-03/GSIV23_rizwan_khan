import { take, takeEvery } from 'redux-saga/effects'
import * as action_type from './Constant'
import { movieDetailsSaga, moviesSaga } from './Saga';



function* RootSaga() {
    yield takeEvery(action_type.GET_MOVIES_REQUEST, moviesSaga)
    yield takeEvery(action_type.GET_MOVIE_DETAILS_REQUEST, movieDetailsSaga)

   
}

export default RootSaga;


