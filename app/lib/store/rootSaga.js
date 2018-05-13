
import { all, fork } from 'redux-saga/effects';

import { 
	loginSaga,
	signupSaga,
	recoverPassSaga,
	tokenGoogleSaga } from '../../sagas/auth-saga';
import counterSaga from '../../sagas/counter-saga';

export default function* rootSaga() {
  	yield all([
  		fork(loginSaga), 
  		fork(signupSaga), 
  		fork(recoverPassSaga),
  		fork(tokenGoogleSaga),
  		fork(counterSaga)
  	])
}