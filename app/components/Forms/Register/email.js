import React from 'react'
import { Form, InputGroup, Label } from 'reactstrap'
import { ButtonGoogle, ButtonLinkedin } from '../ButtonSocial'
import StartSession from '../StartSession'
import OrDivider from '../OrDivider'
import { A } from '../../A'
import { InputGeneral, Append } from '../Input'
import CheckBox from '../CheckBox'
import Button from '../Button'
import { NAME, LASTNAME, EMAIL, PASSWORD, SUBSCRIBE } from '../../../lib/constants/user-constants'
import E from '../../Error'

class FormRegister extends React.Component {

     constructor(props) {
        super(props)
        const s = {}
        s[NAME] = ''
        s[LASTNAME] = ''
        s[EMAIL] = ''
        s[PASSWORD] = ''
        s[SUBSCRIBE] = false
        this.state = s
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (type) => (e) => {
        const o = {}
        const bool = !this.state[SUBSCRIBE] && true
        o[type] = type !== SUBSCRIBE ? e.target.value : bool
        this.setState(o)
        console.log('CHANGE',o)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('SUBMIT SIGNUP',this.state, this.props)
        const { onSubmitSignup } = this.props        
        onSubmitSignup(this.state)

    }
    

    render () {
        console.log('FORM SIGNUP', this.props, this.state)
        const { onChangeTypeForm, errorMessage } = this.props

        return (

            <Form onSubmit={this.handleSubmit}>
                {errorMessage.unkown &&<E>{errorMessage.unknown}</E>}
                <InputGroup className="mb-3">
                    <InputGeneral 
                        placeholder="Correo electrónico" 
                        value={this.state[EMAIL]}
                        onChange={this.handleChange(EMAIL)}
                    />
                    <Append addonType="append"><span className="fa fa-envelope-o"></span></Append>                
                </InputGroup>
                    {errorMessage.emailpass &&<E>{errorMessage.emailpass}</E>}
                    {errorMessage.email &&<E>{errorMessage.email}</E>}
                <InputGroup className="mb-3">
                    <InputGeneral 
                        placeholder="Nombre" 
                        value={this.state[NAME]}
                        onChange={this.handleChange(NAME)}
                    />
                    <Append addonType="append"><span className="fa fa-user"></span></Append>                
                </InputGroup>
                    {errorMessage.name &&<E>{errorMessage.name}</E>}
                <InputGroup className="mb-3">
                    <InputGeneral 
                        placeholder="Apellidos" 
                        value={this.state[LASTNAME]}
                        onChange={this.handleChange(LASTNAME)}
                    />
                    <Append addonType="append"><span className="fa fa-user"></span></Append>                
                </InputGroup>
                    {errorMessage.name &&<E>{errorMessage.name}</E>}
                <InputGroup className="mb-3">
                    <Label for="password" hidden>Password</Label>
                    <InputGeneral 
                        type="password" 
                        id="password" 
                        placeholder="Contraseña" 
                        value={this.state[PASSWORD]}
                        onChange={this.handleChange(PASSWORD)}
                    />
                    <Append addonType="append"><span className="fa fa-lock"></span></Append>                
                </InputGroup>
                    {errorMessage.emailpass &&<E>{errorMessage.emailpass}</E>}
                    {errorMessage.password &&<E>{errorMessage.password}</E>}
                <InputGroup>
                    <CheckBox small 
                        label="Quiero recibir comunicaciones de cambios, políticas y ofertas por parte de Cubiculum."
                        value={this.state[SUBSCRIBE]}
                        click={this.handleChange(SUBSCRIBE)}
                    />
                </InputGroup>

                <InputGroup className="mb-2">        
                <Button color="primary" className="w-100 m-0">Regístrate</Button>        
                </InputGroup>
                <StartSession onChangeTypeForm={onChangeTypeForm} />    

            </Form>
        )   
    }
   
}



export default FormRegister
