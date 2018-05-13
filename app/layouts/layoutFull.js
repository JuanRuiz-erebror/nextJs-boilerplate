import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import dynamic from 'next/dynamic'
import { translate } from 'react-i18next'
import { i18nInstance } from '../lib/i18n'
//import Footer from '../components/Footer'
import Head from 'next/head'
import Navbar from '../components/Navbar'
const Modal = dynamic(import('../components/Modal'), { ssr: false })
const AuthContainer = dynamic(import('../containers/Auth'), { ssr: false })
import { connect } from 'react-redux'

class LayoutFull extends React.Component {
  

   
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        // this.loadModal = this.loadModal.bind(this);
        this.state = {         
            modal: false,
            initialTypeForm: null          
        }

    }


   /* loadModal() {
        const modal = require('../components/Modal').default
        this.setState({ modal: modal })
    }*/

    openModal(type) { 
        this.setState({
            modal: true,
            initialTypeForm: type        
        })
    }   


    static getDerivedStateFromProps(nextProps, prevState) {
        return { modal: false }
        
    }

    render() {

        const Component = this.props.children.type
        const {isAuth} = this.props

        return (
            <div>
                <Head />
                <Navbar 
                    isAuth={isAuth}                   
                    openModal={this.openModal} 
                    {...this.props} 
                />    
                <Component 
                    openModal={this.openModal} 
                    {...this.props}
                />
                <Modal 
                    open={this.state.modal} 
                    initialTypeForm={this.state.initialTypeForm}
                >
                    <AuthContainer />
                </Modal>              
                {/*<Footer/>*/}
            </div>
        )
          
    }

}
/*
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}
*/
/*const mapStateToProps = (state) => { return {}}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutRequest())
    }    
}


const withConnect = connect(mapStateToProps,mapDispatchToProps);

if (!process.browser) translate.setI18n(i18nInstance)

export default compose(
    withConnect
)(LayoutFull)*/

if (!process.browser) translate.setI18n(i18nInstance)
    
/*export default compose(
    // translate()    
)(LayoutFull)*/
export default LayoutFull



