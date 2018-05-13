import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR, 
    PASSRECOVER_REQUEST,
    PASSRECOVER_SUCCESS,
    PASSRECOVER_ERROR,
    TOKENGOOGLE_REQUEST,
    TOKENGOOGLE_SUCCESS,
    CHANGE_FORM } from '../actions/auth-actions'

import { List, fromJS, merge, update } from 'immutable'
import { getCookie } from '../lib/cookie-handler'

const initialState = fromJS({
    typeForm: null,
    loading: false,
    error: {},
    id_token: null,
    // isAuthenticated: getCookie('id_token', req) ? true : false,
    isAuthenticated: false,

    
})

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
        case PASSRECOVER_REQUEST:
        case TOKENGOOGLE_REQUEST:
            return state
                .set('loading', true)
                .set('error',{})
                .set('isAuthenticated', false)
                .set('typeForm',null)
        case TOKENGOOGLE_SUCCESS:
            return state
                .set('loading', false)
                .set('error',{})
                .set('isAuthenticated',true)
                .set('typeForm',null)
        case LOGIN_SUCCESS:          
            return state
                .set('loading', false)
                .set('id_token',action.id_token)
                .set('error',{})
                .set('isAuthenticated',true)
                .set('typeForm',null)
        case SIGNUP_SUCCESS:
            return state
                .set('loading', false)            
                .set('error',{})
                .set('isAuthenticated',false)
                .set('typeForm','successSignup')
        case SIGNUP_ERROR:
        case LOGIN_ERROR:
        case PASSRECOVER_ERROR:
            const typeForm = action.type === LOGIN_ERROR 
            ? 'login' : action.type === SIGNUP_ERROR 
            ? 'register' : 'recover'
            return state
                .set('loading', false)
                .set('error', action.error)
                .set('isAuthenticated',false)
                .set('typeForm',typeForm)
        case CHANGE_FORM:
            if (action.withErrors) {
                return state
                    .set('error',{}) //borramos los mensajes de error
                    .set('typeForm', action.typeForm)
            } else {
                return state.set('typeForm', action.typeForm)
            }
                
                        
        default:
          return state
    }
}
