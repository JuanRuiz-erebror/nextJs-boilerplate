import React from 'react'
import { InputGroup, Button } from 'reactstrap'

const SuccessSignup = ({toggle}) => {

    return (

        <div>
            <h2>Registro realizado</h2>
            <hr className="w-25 ml-0 mb-3 mt-3"/>
            <InputGroup className="mb-2">
                <span className="mb-2">Te hemos enviado un correo electrónica a xxx@xxx para que confirmes tu ingreso.</span>
            </InputGroup> 
             <hr className="mb-3 mt-3"/>   
            <InputGroup className="mb-4">        
            	<Button color="success" onClick={toggle}>OK!</Button>        
            </InputGroup>     
        </div>


    )   
}



export default SuccessSignup
