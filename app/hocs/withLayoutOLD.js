import { Component, PropTypes } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
// import configureProgressBar from '../util/routing';
import dynamic from 'next/dynamic'
import { translate } from 'react-i18next'
import { i18nInstance } from '../lib/i18n'

import Footer from '../components/Footer'

// import Header from '../components/Header';
import Head from 'next/head'
import Navbar from '../components/Navbar'
const Modal = dynamic(import('../components/Modal'), { ssr: false })
// import Modal from '../components/Modal'
// import FormLogin from '../components/Forms/Login'
// import FormRegister from '../components/Forms/Register'
const FormLogin = dynamic(import('../components/Forms/Login'), { ssr: false })
const FormRegisterSocial = dynamic(import('../components/Forms/Register/social'), { ssr: false })
const AuthContainer = dynamic(import('../containers/Auth'), { ssr: false })


const BaseLayout = (type = 1) => ComposedComponent => class WithLayout extends Component {
  
    static async getInitialProps(ctx) {
        return loadGetInitialProps(ComposedComponent, ctx);
        
    }

    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        // this.loadModal = this.loadModal.bind(this);
        this.state = {         
          modal: false,
          typeForm: false          
        };

    }


   /* loadModal() {
        const modal = require('../components/Modal').default
        this.setState({ modal: modal })
    }*/

    openModal(type) { 
        this.setState({
            modal: true,
            typeForm: type        
        })
    }   



    static getDerivedStateFromProps(nextProps, prevState) {
        return { modal: false }
        
    }

    render() {
        console.log('MODAL',this.state)   
        const Form = this.state.register ? FormRegisterSocial : FormLogin
        switch (type) {            
            case 1:
                return (
                    <div>
                        <Head />
                        <Navbar 
                            openModal={this.openModal} 
                            {...this.props}
                        />    
                        <ComposedComponent 
                            openModal={this.openModal}
                            {...this.props} 
                        />
                        <Modal open={this.state.modal}>
                            <AuthContainer typeForm={this.state.typeForm} />
                        </Modal>
                      
                        <Footer/>

                    </div>
                )
            case 2:
                return (
                    <div>
                        <Head />
                        <Navbar  {...this.props}/>    
                        <ComposedComponent {...this.props} />
                    </div>
                )
        }

    }
};


if (!process.browser) translate.setI18n(i18nInstance);

export default BaseLayout