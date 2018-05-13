import { combineReducers } from 'redux-immutable'
import counter from '../../reducers/counter'
import auth from '../../reducers/auth-reducers'

export default combineReducers({
  	counter,
  	auth
})

