import React from 'react'
import { Form, InputGroup, Label, Input } from 'reactstrap'
import Link from 'next/link';
import Router from 'next/router'
import FormRegisterSocial from '../Register/social'
import FormPassword from '../Password'
import OrDivider from '../OrDivider'
import { ButtonGoogle, ButtonLinkedin } from '../ButtonSocial'
import { InputGeneral, Append } from '../Input'
import CheckBox from '../CheckBox'
import Button from '../Button'
import { A, Asm } from '../../A'
import { EMAIL, PASSWORD, REMEMBER } from '../../../lib/constants/user-constants'
import E from '../../Error'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class FormLogin extends React.Component {

    constructor(props) {
        super(props)
        const s = {}
        s[EMAIL] = ''
        s[PASSWORD] = ''
        s[REMEMBER] = false
        this.state = s
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)

        console.log('form CONSTRUCT')
    }

    handleChange = (type) => (e) => {
        const o = {}
        const bool = !this.state[REMEMBER] && true
        o[type] = type !== REMEMBER ? e.target.value : bool
        this.setState(o)
        console.log('CHANGE',o)
    }

    handleSubmit(e) {
        e.preventDefault()
        // alert('A name was submitted: ' + this.state.value);
        console.log('SUBMIT',this.state, this.props)

        const { onSubmitLogin, toggle } = this.props
        
        onSubmitLogin(this.state)
    }


    responseGoogle(response) {
        console.log('RESPONSE GOOGLE',response)
        const id_token = response.tokenId
        const access_token = response.accessToken
        const { tokenGoogle } = this.props
        tokenGoogle(id_token, access_token)        
    }

    failureGoogle(response) {
        console.log('FAILURE GOOGLE', response)
    }

   

    render() {

        console.log('FORM LOGIN', this.props, this.state)
        const { onChangeTypeForm, errorMessage } = this.props
        return (  
            <div>
              <GoogleLogin
                        clientId={'941651885304-me7c9akkqbggbt21hvietccluahefa0v.apps.googleusercontent.com'}
                        onSuccess={this.responseGoogle}
                        onFailure={this.failureGoogle}
                    >
                       {/* <FontAwesome
                            name='google'
                        />*/}
                        <span> Login with Google</span>
                    </GoogleLogin>

                   {/* <GoogleLogout
                      buttonText="Logout"
                      onLogoutSuccess={logout}
                    >
                    </GoogleLogout>*/}
            <Form onSubmit={this.handleSubmit}>
                {errorMessage.unkown &&<E>{errorMessage.unknown}</E>}
                {/*<InputGroup className="mb-2">
                    <ButtonGoogle href="#" ><span className="fa fa-google mr-3"></span>
                        <span className="font-weight-bold text-white">Iniciar sesión con Google</span>
                    </ButtonGoogle>
                </InputGroup>*/}
                <InputGroup>
                    <ButtonLinkedin href="#" ><span className="fa fa-linkedin mr-3"></span>
                        <span className="font-weight-bold text-white">Iniciar sesión con Linkedin</span>
                    </ButtonLinkedin>
                 </InputGroup>
                <OrDivider/>
                <InputGroup className="mb-3">
                    <InputGeneral 
                        placeholder="Dirección de correo electrónico"
                        value={this.state[EMAIL]}
                        onChange={this.handleChange(EMAIL)}
                    />                    
                    <Append addonType="append"><span className="fa fa-envelope-o"></span></Append>
                </InputGroup>
                    {errorMessage.emailpass &&<E>{errorMessage.emailpass}</E>}
                    {errorMessage.email &&<E>{errorMessage.email}</E>}
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
                    <div>
                    <CheckBox 
                        name={REMEMBER} 
                        label="Remember me"
                        value={this.state[REMEMBER]}
                        click={this.handleChange(REMEMBER)}
                    />
                    </div>
                    </InputGroup>
                <InputGroup className="mb-2">        
                    <Button color="warning" className="w-100 m-0" type="submit">Iniciar sesión</Button>        
                </InputGroup>
                <InputGroup>
                    <Asm className="text-center m-auto font-weight-bold" onClick={() => onChangeTypeForm('recover')} href="#">¿Has olvidado tu contraseña?</Asm>
                </InputGroup>

                <hr className="mb-3 mt-3"/>
                <InputGroup className="mb-4">
                    <span className="text-center m-auto">¿No tienes cuenta?
                        <A className="pl-2" onClick={() => onChangeTypeForm('registerSocial')} href="#">Registrate</A>
                    </span>
                    
                </InputGroup>
            </Form>
            </div>
        )
    }
}



export default FormLogin
