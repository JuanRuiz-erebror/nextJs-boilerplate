import React from 'react'
import { Form, InputGroup } from 'reactstrap'
import FormLogin from '../Forms/Login'
import { A } from '../A'

export const StartSession = ({
    label = '¿Ya tienes una cuenta?', 
    onChangeTypeForm
}) => {
    return (
        <div> 
            <hr className="mb-3 mt-3"/>
            <InputGroup className="mb-4">
                <span className="text-center m-auto">{label}
                    <A className="pl-2" onClick={() => onChangeTypeForm('login')} href="#">Iniciar sesión</A>
                </span>                
            </InputGroup>
        </div>
 
    )

}


export default StartSession
