import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import FormLogin from '../../components/Forms/Login'
import FormRegister from '../../components/Forms/Register/email'
import FormRegisterSocial from '../../components/Forms/Register/social'
import PasswordRecover from '../../components/Forms/Password'
import Success from '../../components/Forms/success'
import { 
    loginRequest,
    signupRequest,
    passRecoverRequest,
    tokenGoogleRequest,
    changeForm } from '../../actions/auth-actions'
import {
    makeSelectLoading,
    makeSelectError,
    makeSelectIsAuthenticated,
    makeSelectTypeForm }  from '../../selectors/auth-selectors'
import Router from 'next/router'

class AuthContainer extends React.Component {


    constructor(props) {
        super(props)
        const typeForm = props.typeForm || null
        this.state = { typeForm: typeForm }
    }


    static getDerivedStateFromProps(nextProps, prevState) {

        //si auth, cerramos el modal
        { nextProps.isAuthenticated && Router.replace('/') }

        let type        
        if (!nextProps.isOpen) {  // cuando cerramos el modal
            if (Object.getOwnPropertyNames(nextProps.errorMessage).length === 0) {
                nextProps.onChangeTypeForm(null, null)
            } else {
                nextProps.onChangeTypeForm(null, 1)    
            }            
            type = null
        } else if (nextProps.isOpen && !prevState.typeForm) {  
            type = nextProps.initialTypeForm
        } else {
            type = nextProps.typeForm
        }

        return { typeForm: type }

    }

    render() {
        console.log('AUTH CONTAINER', this.props, this.state)
        const { typeForm } = this.state      
       
        switch (typeForm) {
            case 'registerSocial':
                return (
                    <FormRegisterSocial {...this.props} />
                )
            case 'login':
                return (
                    <FormLogin {...this.props} />
                )
            case 'register':
                return (
                    <FormRegister {...this.props} />
                )
            case 'recover':
                return (
                    <PasswordRecover {...this.props} />
                )
            case 'successSignup':
            case 'successRecover':
                return (
                    <Success type={typeForm} toggle={this.props.toggle} />
                )     
            default:
                return <div>Nada!!</div>
        }   
    }
}


AuthContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    errorMessage: PropTypes.object,
    typeForm: PropTypes.string,
    loading: PropTypes.bool
   /* name: PropTypes.string,
    email: PropTypes.string*/

}


const mapStateToProps = createStructuredSelector({
   /* name: makeSelectUsername(),    
    email: makeSelectEmail(),*/
    loading: makeSelectLoading(),
    errorMessage: makeSelectError(),
    typeForm: makeSelectTypeForm(),
    isAuthenticated: makeSelectIsAuthenticated(),
})


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitLogin: (creds) =>  dispatch(loginRequest(creds)),  
        onSubmitSignup: (creds) => dispatch(signupRequest(creds)),
        onSubmitPassRecover: (email) => dispatch(passRecoverRequest(email)),
        tokenGoogle: (id_token, access_token) => dispatch(tokenGoogleRequest(id_token, access_token)),
        onChangeTypeForm: (typeForm, withErrors) => dispatch(changeForm(typeForm, withErrors))
    }    
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
     withConnect
)(AuthContainer)
