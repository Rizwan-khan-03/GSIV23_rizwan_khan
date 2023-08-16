import { take, takeEvery } from 'redux-saga/effects'
import * as action_type from './Constant'
import { moviesSaga } from './Saga';



function* RootSaga() {
    yield takeEvery(action_type.GET_MOVIES_SUCCESS, moviesSaga)

   
}

export default RootSaga;


