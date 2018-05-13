
import React from 'react'
import { compose } from 'redux';
import { translate } from 'react-i18next'
import { i18nInstance } from '../app/lib/i18n'
import dynamic from 'next/dynamic'
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Col } from 'reactstrap'
import withLayout from '../app/hocs/withLayout'
import ActiveLink from '../app/components/ActiveLink'
import withServerProps from '../app/hocs/withServerProps'
import Link from 'next/link';
import Router from 'next/router'
import { Container, Row } from 'reactstrap'
import withReduxSaga from '../app/lib/store/withReduxSaga'
import { isAuthenticated } from "../app/services/auth/auth";



class Index extends React.Component {


    render () {
	    const { t, tReady } = this.props
	    return (
          	<div>               

                <div className="main-container">
                    <h3 className="mt-3 mr-3" >Welcome to NextJs boilerplate!!
                    <style jsx>{`font-weight:700`}</style>
                    </h3>
                   
                </div>
                <hr className="mb-5 mt-4"/>
        

           	</div>  
	    )
    }
}


export default compose(
    
    // tranlate antes que withLayout para que podamos pasar 
    // los props a todas las capas del withLayout
    translate(),
    withReduxSaga,
    withLayout()
)(Index)
