import React from 'react'
import { Form, InputGroup, Button } from 'reactstrap'
import { ButtonGoogle, ButtonLinkedin } from '../ButtonSocial'
import StartSession from '../StartSession'
import OrDivider from '../OrDivider'
import { A } from '../../A'
import FormRegister from './email'

class FormRegisterSocial extends React.Component {

    render () {
        console.log('FORM REGISTER SOCIAL', this.props)
        const { onChangeTypeForm } = this.props
        return (

            <Form>
                 <InputGroup className="mb-2">
                    <ButtonGoogle href="#" ><span className="fa fa-google mr-3"></span>
                        <span className="font-weight-bold text-white">Regístrate con Google</span>
                    </ButtonGoogle>
                </InputGroup>
                <InputGroup>
                    <ButtonLinkedin href="#" ><span className="fa fa-linkedin mr-3"></span>
                        <span className="font-weight-bold text-white">Regístrate con Linkedin</span>
                    </ButtonLinkedin>
                 </InputGroup>
                <OrDivider/>
                <InputGroup className="mb-4">
                    <Button onClick={() => onChangeTypeForm('register')} href="#" color="primary" outline><span className="fa fa-2x fa-envelope-o mr-3"></span>
                        <span className="font-weight-bold">Regístrate con una dirección de correo electrónico</span>
                    </Button>
                </InputGroup>
                <StartSession onChangeTypeForm={onChangeTypeForm} />

            </Form>

     
        )
    }    

}


export default FormRegisterSocial
