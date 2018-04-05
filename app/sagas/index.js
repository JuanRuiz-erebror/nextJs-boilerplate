
import { all, fork } from 'redux-saga/effects';

// import loginFlow from './login-saga.jsx';
import counterSaga from './counter-saga';

export default function* rootSaga() {
  // yield all([fork(loginFlow), fork(watchQuotes)]);
  yield all([fork(counterSaga)])
  
}