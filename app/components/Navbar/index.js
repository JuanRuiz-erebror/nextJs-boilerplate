/**
*
* Navbar
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu } from 'reactstrap';

import Navbar from './Navbar'
import DropdownItem from './DropdownItem'
import ActiveLink from '../ActiveLink'

import { translate } from 'react-i18next'
import { i18nInstance } from '../../../app/lib/i18n'
import { setCookie, getCookie } from '../../../app/lib/cookie-handler';
import i18next from 'i18next';
import { compose } from 'redux';

class NavbarComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  

	constructor(props) {
	    super(props);
	    this.toggle = this.toggle.bind(this);
	    this.changeLanguage = this.changeLanguage.bind(this);
	    this.parseLanguage = this.parseLanguage.bind(this);
	    this.state = {
	      isOpen: false,
	      lng: i18next.language
	      // lng: getCookie('i18next', props)
	    };

	}

	parseLanguage(lng) {
		const newLng = lng === 'en' ? 'gb' : lng
		this.setState({
	      	lng: newLng
	    })
	    console.log('LNG',newLng)

	}

	toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	}

	changeLanguage(lng) {
		this.parseLanguage(lng)
     	i18nInstance.changeLanguage(lng)
      	setCookie('i18next',lng, 300);
	}

	componentDidMount() {
		this.parseLanguage(this.state.lng)
	}





	render() {
		const { t } = this.props
		console.log('TTTT',this.props)
	    return (
	      <div>
	        <Navbar light expand="md" fixed="top">
	          	<NavbarBrand href="#">
	          		erebror
	          	</NavbarBrand>
	          	<NavbarToggler onClick={this.toggle} />
	          	<Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              	{/*<NavItem>
	              		<ActiveLink href="/espacio">
	                		espacio
	                	</ActiveLink>	
	              	</NavItem>*/}
	              	<NavItem>
	                	<NavLink href="/ayuda">Ayuda</NavLink>
	              	</NavItem>
	              	<NavItem>
	                	<NavLink href="/signin">Login</NavLink>
	              	</NavItem>
	              	<NavItem>
	                	<NavLink href="/signup">Regístrate</NavLink>
	              	</NavItem>
	              	<UncontrolledDropdown nav inNavbar>
		                <DropdownToggle nav caret>
		                	<span className={"flag-icon flag-icon-" + this.state.lng}></span>
		                </DropdownToggle>
		                <DropdownMenu right>
		                  	<DropdownItem>
		                  		<div onClick={() => this.changeLanguage('es')}>
		                    		<span className="flag-icon flag-icon-es"></span>{t('lang:es')}
		                    	</div>
		                  	</DropdownItem>
		                  	<DropdownItem divider />
		                  	<DropdownItem>
		                  		<div onClick={() => this.changeLanguage('en')}>
		                    		<span className="flag-icon flag-icon-gb"></span>{t('lang:en')}
		                    	</div>	
		                  	</DropdownItem>
		                  	{/*<DropdownItem divider />
		                  	<DropdownItem>
		                    	Reset
		                  	</DropdownItem>*/}
		                </DropdownMenu>
	              	</UncontrolledDropdown>
	             
	            </Nav>
	          </Collapse>
	        </Navbar>
	      </div>
	    );
	}

}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

// export default Index;

// exportd default withServerProps(Index)

export default NavbarComponent

