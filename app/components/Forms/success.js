import React from 'react'
import { InputGroup, Button } from 'reactstrap'

const SuccessSignup = ({type, toggle}) => {

    let text
    let title
    switch (type) {
        case 'successSignup':
            title = 'Registro realizado'
            text = 'Te hemos enviado un correo electrónic a xxx@xxx para que confirmes tu ingreso.'
            break
        case 'successRecover':
            title = 'Envío realizado'
            text = 'Te hemos enviado un correo electrónic a xxx@xxx con la nueva clave.'
            break
        default:
            return 'OK!'
    }


    return (

        <div>
            <h2>{title}</h2>
            <hr className="w-25 ml-0 mb-3 mt-3"/>
            <InputGroup className="mb-2">
                <span className="mb-2">{text}</span>
            </InputGroup> 
             <hr className="mb-3 mt-3"/>   
            <InputGroup className="mb-4">        
            	<Button color="success" onClick={toggle}>OK!</Button>        
            </InputGroup>     
        </div>


    )   
}



export default SuccessSignup
