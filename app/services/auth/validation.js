export const validateNewUser = async (
    name,
    lastname,
    email,
    password
  // password_confirmation
) => {

    let error = {}
    try {
        let valid2 = await validateCredentials(email, password)
        console.log('validation-2',valid2)
        let valid1 = await validateName(name, lastname)
        console.log('validation-1',valid1)
    } catch(e) {
        throw (e)
    }    
}

export const validateName = (name, lastname) => {
    let error = {}

    return new Promise((resolve, reject) => {
        if (!name || !lastname) {
            console.log('valname')
            error.name = 'Name and lastname field are required.'
        }   

        if (error.name) reject(error)

        resolve(null)
    })
}


export const validateEmail = (email) => {
    let error = {}

    return new Promise((resolve, reject) => {
        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            error.email = 'You must to insert a correct email.'
        }

        if (error.email) reject(error)

        resolve(null)
    })
}


export const validateCredentials = (email, password) => {

    let error = {}
    return new Promise((resolve, reject) => {

        if (!email || !password) {
            console.log('validation-email-pass')
            error.emailpass = 'Email and password fields are required.'           
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log('validation-email')
            error.email = 'Email not have a correct format.'
        }

        if (!(password.length >= 8)) {
            console.log('validation-pass')
            error.password = 'Password needs at least 8 characters.'
        }

        if (error.emailpass || error.email || error.password) {
            reject(error)
        }

        resolve(null)
    })
}