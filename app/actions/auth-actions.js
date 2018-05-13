

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export const PASSRECOVER_REQUEST = 'PASSRECOVER_REQUEST'
export const PASSRECOVER_SUCCESS = 'PASSRECOVER_SUCCESS'
export const PASSRECOVER_ERROR = 'PASSRECOVER_ERROR'

export const CHANGE_FORM = 'CHANGE_FORM'

export const TOKENGOOGLE_REQUEST = 'TOKENGOOGLE_REQUEST'
export const TOKENGOOGLE_SUCCESS = 'TOKENGOOGLE_SUCCESS'

/**
*
* Login actions
*
*/
export const loginRequest = ( creds ) => ({
	type: LOGIN_REQUEST,		
	creds	
})

export const loginSuccess = ( id_token ) => ({
	type: LOGIN_SUCCESS,
	id_token,
})

export const loginError = ( error ) => ({
	type: LOGIN_ERROR,
	error,
})

export const tokenGoogleRequest = (id_token, access_token) => ({
	type: TOKENGOOGLE_REQUEST,
	id_token,
	access_token
})

export const tokenGoogleSuccess = () => ({ type:TOKENGOOGLE_SUCCESS })

export const logoutRequest = () => ({ type: LOGOUT_REQUEST })

export const logoutSuccess = () => ({ type: LOGIN_SUCCESS })


/**
*
* Sign up actions
*
*/

export const signupRequest = ( creds ) => ({
	type: SIGNUP_REQUEST,		
	creds	
})

export const signupSuccess = () => ({ type: SIGNUP_SUCCESS })

export const signupError = ( error ) => ({
	type: SIGNUP_ERROR,
	error
})



/**
*
* Recover password actions
*
*/

export const passRecoverRequest = ( email ) => ({
	type: PASSRECOVER_REQUEST,
	email
})

export const passRecoverSuccess = () => ({ type: PASSRECOVER_SUCCESS })

export const passRecoverError = ( error ) => ({
	type: PASSRECOVER_ERROR,
	error
})



/**
*
* Misc. actions
*
*/
export const changeForm = ( typeForm, withErrors ) => ({
	type: CHANGE_FORM,
	typeForm,
	withErrors
})

