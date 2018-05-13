
import { takeEvery, take, call, fork, put, select, cancel, cancelled } from 'redux-saga/effects'
import { 
    LOGIN_REQUEST,
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    SIGNUP_REQUEST,
    PASSRECOVER_REQUEST,
    TOKENGOOGLE_REQUEST,
    passRecoverSuccess,
    passRecoverError,
    signupSuccess,
    signupError,
    loginError,
    loginSuccess,
    tokenGoogleSuccess,
    logoutSuccess } from '../actions/auth-actions'

import { 
    signIn, 
    signUp, 
    signOut, 
    recoverPass, 
    registerTokenGoogle } from '../services/auth/auth'
import { NAME, LASTNAME, EMAIL, PASSWORD, REMEMBER } from '../lib/constants/user-constants'


/******************************************************************************/
/***************************** Subroutines ************************************/
/******************************************************************************/

export function* authorize(creds) { 
    try {
        const email = creds[EMAIL]
        const password = creds[PASSWORD]
        const remember = creds[REMEMBER]

        const id_token = yield call(signIn, email, password, remember)  
        // id_token = JSON.parse(id_token)      
        yield put(loginSuccess(id_token)) 

    } catch(error) {
        console.log('ERROR AUTH',error)
        yield put(loginError(error))        
    } finally {
        if (yield cancelled()) {
            yield fork(logoutUser)
        }
    }

}


export function* logoutUser() {
    console.log('logoutUser')
    yield call(signOut)
    yield put(logoutSuccess())
}


export function* registerUser(creds) { 
    try {
        const name = creds[NAME]
        const lastname = creds[LASTNAME]
        const email = creds[EMAIL]
        const password = creds[PASSWORD]

        const res = yield call(signUp, name, lastname, email, password)  
        yield put(signupSuccess(res))

    } catch(error) {
        yield put(signupError(error))
    }    


}

export function* recoverPassword(email) { 
    try {        
        const res = yield call(recoverPass, email)
        console.log('recover success')
        yield put(passRecoverSuccess(res))

    } catch(error) {
        yield put(passRecoverError(error))
    } 
}


export function* registerToken(id_token, access_token) { 
    try {        
        const res = yield call(registerTokenGoogle, id_token, access_token)
        console.log('reg token success')
        yield put(tokenGoogleSuccess())

    } catch(error) {
        console.log('TOKEN ERROR', error)
        yield put(loginError(error))
    } 
}



/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* loginSaga() {

    console.log('loginSaga')
    while(true) {
        const {creds} = yield take(LOGIN_REQUEST)
        const task = yield fork(authorize, creds)

        //if in middle of an API call we take a LOGOUT action
       /* const action = yield take([LOGOUT_REQUEST, LOGIN_ERROR])
        if (action.type === LOGOUT_REQUEST) {
            yield cancel(task) 
        }

        //loginFlow makes sure no token will be in the storage before waiting for the next login.
        yield fork(logoutUser)*/

    }
}

export function* signupSaga() {
    console.log('signupSaga')
    while(true) {
        const { creds } = yield take(SIGNUP_REQUEST)
        const task = yield fork(registerUser, creds)
    }
}

export function* tokenGoogleSaga() {
    console.log('tokenGoogleSaga')
    while(true) {
        const { id_token, access_token } = yield take(TOKENGOOGLE_REQUEST)
        const task = yield fork(registerToken, id_token, access_token)
    }
}

export function* recoverPassSaga() {
    console.log('recoverPassSaga')
    while(true) {
        const { email } = yield take(PASSRECOVER_REQUEST)
        const task = yield fork(recoverPassword, email)
    }
}

