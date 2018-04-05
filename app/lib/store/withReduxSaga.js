import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

import nextReduxWrapper from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'

import { fromJS } from 'immutable'

const sagaMiddleware = createSagaMiddleware()


export function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}


/*export default function(
  BaseComponent,
  mapStateToProps = null,
  mapDispatchToProps = null
) {
  return nextReduxWrapper(configureStore, mapStateToProps, mapDispatchToProps)(
    nextReduxSaga(BaseComponent))
}*/


export default function (BaseComponent) {
  return nextReduxWrapper(configureStore)(nextReduxSaga(BaseComponent))
}