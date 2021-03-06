
import { takeEvery, take, call, fork, put, select, cancel, cancelled } from 'redux-saga/effects'
import { countSuccess, countError, constants } from '../actions/counter'
import api from '../lib/counterApi'


/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/
export function* requestCounter(type, uri) {
  try {    
    console.log('type',type)
    let val = yield call(api,type)
    console.log('newCount',val)
    yield put(countSuccess(val,uri))

  } catch(error) {
    yield put(countError(error))
  }
    
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export default function* counterSaga() {

  console.log('saga-counter')
  while(true) {
    try {
      const {type, uri } = yield take([constants.COUNTER_INCREMENT,constants.COUNTER_DECREMENT])
      yield fork(requestCounter, type, uri)   
    } catch(e) {
      yield put(countError())
    }
  }
}

