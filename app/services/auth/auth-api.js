import { get, post } from '../../lib/request'


export const authenticate = async (email, password) => {
    /*try {
        const res = await post("/user_token", {
            auth: {
                email,
                password
            }
        })
        return res.data;
    } catch (error) {
        return error.response && error.response.status === 404
            ? "Wrong email/password"
            : "Unknown error. Please try again";
    }*/


    let error = {}
    try {
        // throw new Error
        // fake authenticate
        const id_token = 'secret-token' 
        return id_token

    } catch (e) {

        throw ({unkown:'Error unknown at authenticate. Pleas, try again'})
    }
}


export const sendTokenGoogle = async (id_token, access_token) => {
    try {
       /* const res = await post("/add_token", {
            token: {
                id_token,
                access_token
            }
        })*/
        return 'ok';
    } catch (error) {
        throw ({unkown:'Error unknown at send token. Pleas, try again'})
    }
}