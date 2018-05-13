import { post, get } from "../../lib/request";

const endpoint = '/user'

export const createUser = async (
    name,
    email,
    password,
    subscribe
    // password_confirmation
) => {
   /* try {
        const response = await post(`${endpoint}`, {
            user: {
                name,
                email,
                password,
                subscribe
                // password_confirmation
            }
        })
        return response
    } catch (error) {
        return error.response && error.response.status === 422
          ? "Email is already taken."
          : "Unknown error. Please try again";
    }*/

    let error = {}
    try {
        // throw new Error

        // fake authenticate
        return 'user created!'

    } catch (e) {

        throw ({unknown:'Error unknown at authenticate. Pleas, try again'})
    }

};

/*export const getUsers = () => {
    return getData(`${endpoint}`, null);
}

export const getUser = (jwt, id) => {
    return getData(`${endpoint}/${id}`, jwt);
}

export const getCurrentUser = jwt => {
    return getData(`${endpoint}`, jwt);
}

const getData = (endpoint, jwt) => {
    try {
        return get(endpoint, jwt);
    } catch (error) {
        return error;
    }
}

*/

export const getUserByEmail = (emaill) => {    
    try {
        return get(`${endpoint}/${email}`)
    } catch (e) { 
        throw ({unknown:'User no exist'}) 
    }  
}


export const getCurrentUser = jwt => {
    try {
        return get(`${endpoint}`, jwt);
    } catch (error) {
        return error;
    }   
}