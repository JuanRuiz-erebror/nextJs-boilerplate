import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "../../lib/cookie-handler";
import { 
    validateCredentials,
    validateNewUser,
    validateEmail } from "./validation";
import { authenticate, sendTokenGoogle } from './auth-api'
import { createUser, getUserByEmail } from '../user/user-api'

const targetIn = '/';
const targetOut = '/';


export const signIn = async (email, password, remember) => {
    let res =  {}

    try {
        const error = await validateCredentials(email, password)
        const id_token = await authenticate(email, password)
        const exp = remember ? 30 : 1
        setCookieTokens(id_token, null, exp)        
        return id_token
    } catch (e) { throw (e) }
}


export const recoverPass = async (email) => {
    let res =  {}
    try {
        const error = await validateEmail(email)
        // const user = await getUserByEmail(email)
        //fake user
        const user = 'ok'
        return user
    } catch (e) { throw (e) }
}


export const registerTokenGoogle = async (id_token, access_token) => {
    try {
        const error = await sendTokenGoogle(id_token, access_token)       
        setCookieTokens(id_token, access_token)
        return 'ok'
    } catch (e) { throw (e) }
}


// export const signUp = async (name, email, password, password_confirmation) => {
export const signUp = async (name, lastname, email, password, subscribe) => {
      // const error = validateNewUser(name, email, password, password_confirmation);
    let res =  {}
    try {
        const error = await validateNewUser(name, lastname, email, password)
        const res = await createUser(name, email, password, subscribe) 
        setCookie("success", `${name}, your account was created.`)
        return res     
    } catch (e) { throw (e) }
  
    // redirect(targetIn);
}

export const signOut = (ctx = {}) => {
    if (process.browser) {
        removeCookie('id_token')
        removeCookie('access_token')
        redirect(targetOut, ctx)
    }
}


export const setCookieTokens = (id_token, access_token, exp) => {
    setCookie('id_token',id_token, exp)
    if (access_token) {        
        setCookie('access_token', access_token)
    }
}


export const getJwt = ctx => {
    return getCookie('id_token', ctx.req);
}

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
    if (isAuthenticated(ctx)) {
        redirect('/user', ctx)
        return true;
    }
    return false;
}

export const redirectIfNotAuthenticated = ctx => {
    if (!isAuthenticated(ctx)) {
        redirect("/auth/login", ctx);
        redirect("/", ctx);
        return true;
    }
    return false;
}
