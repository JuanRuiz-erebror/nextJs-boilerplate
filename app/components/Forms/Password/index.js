import React from 'react'
import { Form, InputGroup, Label } from 'reactstrap'
import StartSession from '../StartSession'
import { InputGeneral, Append } from '../Input'
import Button from '../Button'
import { EMAIL } from '../../../lib/constants/user-constants'
import E from '../../Error'

class PasswordRecover extends React.Component {

    constructor(props) {
        super(props)
        const s = {}       
        s[EMAIL] = ''        
        this.state = s
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (type) => (e) => {
        const o = {}
        o[type] = e.target.value
        this.setState(o)
        console.log('CHANGE',o)
    }

    handleSubmit(e) {
        e.preventDefault()
        const { onSubmitPassRecover } = this.props        
        onSubmitPassRecover(this.state[EMAIL])

    }
    render() {
        
        const { onChangeTypeForm, errorMessage } = this.props

        return (
            <Form onSubmit={this.handleSubmit}>
                <h2>Restablecer contraseña</h2>
                <hr className="w-25 ml-0 mb-3 mt-3"/>
                <InputGroup className="mb-2">
                    <span className="mb-2">Introduce la dirección de correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer tu contraseña.</span>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGeneral 
                        placeholder="Correo electrónico" 
                        onChange={this.handleChange(EMAIL)}
                        value={this.state[EMAIL]}
                    />
                    <Append addonType="append"><span className="fa fa-envelope-o"></span></Append>                
                </InputGroup>          
                    {errorMessage.email &&<E>{errorMessage.email}</E>}
                    {errorMessage.unknown &&<E>{errorMessage.unknown}</E>}
                <InputGroup className="mb-2">        
                <Button color="danger" className="w-100 m-0">Enviar</Button>        
                </InputGroup>
                <StartSession label="Volver a" onChangeTypeForm={onChangeTypeForm} />    

            </Form>
        )   
    }
  
}



export default PasswordRecover
