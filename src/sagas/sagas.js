import { call, put, takeEvery } from 'redux-saga/effects';
import { EXAMPLE_ACTION, SAGA_ACTION } from '../actions/types';

const apiCall = () => fetch('https://dev.bbvaapimarket.com/api/terms/general/es')

function * fetchUser (action) {
  try {
    const data = yield call(apiCall, '')
    const value = () => data.json()
    const item = yield call(value, '')
    console.log(item)
    yield put({ type: SAGA_ACTION, payload: item.result.info })
  } catch (e) {
    console.log(e)
  }
}

function * mySaga () {
  yield takeEvery(EXAMPLE_ACTION, fetchUser)
}

/* function* mySaga() {
  yield takeLatest(EXAMPLE_ACTION, fetchUser);
} */

export default mySaga
