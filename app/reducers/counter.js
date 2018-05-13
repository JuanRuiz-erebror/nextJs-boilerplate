import { constants } from '../actions/counter'

import { fromJS } from 'immutable'


const initialState = fromJS({
    loading: false,
    error: false,    
    count: 0,
    uri:''
})


/*const initialState = {
    loading: false,
    count: 0,
    error: false
}*/

/*
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case counter.types.COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case counter.types.COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};*/


//version con saga
/*export default (state = initialState, action = {}) => {
  switch (action.type) {
    case counter.types.COUNTER_INCREMENT:
    case counter.types.COUNTER_DECREMENT:
      return {...state}

    case counter.types.COUNTER_SUCCESS:
    console.log('ACITON',action,'STATE',state)
      return {
        ...state,
        ...{count:state.count + action.count}
      
      }
    case counter.types.COUNTER_ERROR:
      return {
        ...state,
        ...{error: action.error}
      }
    default:
      return state
    }
}*/


export default (state = initialState, action = {}) => {
  
  switch (action.type) {
    case constants.COUNTER_INCREMENT:
    case constants.COUNTER_DECREMENT:
       
        return state
            .set('loading', true)
            .set('error', false)
    case constants.COUNTER_SUCCESS:  
        console.log('ACITON',action,'STATE',state,'COUNTTTTTT',state.get('count'))
        return state
            .set('loading', true)
            .set('count',state.get('count') + action.count)
            .set('error', false)
            .set('uri',action.uri)
    case constants.COUNTER_ERROR:
        return state
            .set('loading', false)
            .set('error', action.error)      
    default:
      return state
    }
}