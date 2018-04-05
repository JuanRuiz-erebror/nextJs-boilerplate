
import { takeEvery, take, call, fork, put, select, cancel, cancelled } from 'redux-saga/effects'
import { typesLogin, typesLogout } from '../actions/login'
import * as api from '../api.jsx'

import * as actions from '../actions2.jsx'


/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

// Calls the API to get a token and
// dispatches actions along the way
// export function* authorize({ creds, uri }) {
export function* authorize(endpoint,config) { 
  try {
      let user = yield call(api.get, endpoint, config)
      user = JSON.parse(user)
      yield put(actions.loginSuccess(user))
      yield call(api.setStore, [
                        {name:'id_token',value:user.id_token},
                        {name:'access_token',value:user.access_token},
                      ])
      return user
  } catch(error) {
    console.log('errorAuth',error)
      yield put(actions.loginError(error))
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
      yield fork(logoutUser)
    }
  }

}

// Logs the user out
export function* logoutUser() {
  console.log('logoutUser')
  yield call(api.deleteStore, ['id_token','access_token'])
  yield put(actions.logoutSuccess())

}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export default function* loginFlow() {

  console.log('flow')
  while(true) {
    const {creds, uri, endpoint} = yield take(typesLogin.LOGIN_REQUEST)
    const config = api.configHeader.user(uri)
    //fork return a Task object
    const task = yield fork(authorize, endpoint, config)

    //if in middle of an API call we take a LOGOUT action
    const action = yield take([typesLogout.LOGOUT_REQUEST, typesLogin.LOGIN_FAILURE])
    if (action.type === typesLogout.LOGOUT_REQUEST) {
      yield cancel(task) 
    }

    //loginFlow makes sure no token will be in the storage before waiting for the next login.
    yield fork(logoutUser)

  }
  // yield takeEvery(typesLogin.LOGIN_REQUEST, authorize);
  //otra forma de hacerlo *
  /*const {creds,uri} = yield take(typesLogin)
  yield call(loginUser,creds,uri)*/


  // yield takeEvery(typesLogout.LOGOUT_REQUEST, logoutUser);
}

