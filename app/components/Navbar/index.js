
import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	Button,
  	Collapse,
  	NavbarToggler,
  	NavbarBrand,
  	Nav,
  	NavLink,
  	Dropdown,
  	DropdownToggle,
  	DropdownItem,
  	DropdownMenu } from 'reactstrap';
import Navbar from './Navbar'
import NavItem from './NavItem'
import DropdownItemMod from './DropdownItem'
import DropdownMenuMod from './DropdownMenu'
import ActiveLink from '../ActiveLink'
import { translate } from 'react-i18next'
import { i18nInstance } from '../../../app/lib/i18n'
import { setCookie, getCookie } from '../../../app/lib/cookie-handler';
import i18next from 'i18next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { signOut } from '../../services/auth/auth'


class NavbarComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

	

	constructor(props) {
	    super(props)
	    this.toggle = this.toggle.bind(this)
	    this.toggleDropdown = this.toggleDropdown.bind(this)
	    this.toggleDropdownUser = this.toggleDropdownUser.bind(this)
	    this.changeLanguage = this.changeLanguage.bind(this)
	    this.parseLanguage = this.parseLanguage.bind(this)
	    /*this.openModal = this.openModal.bind(this);
	    this.loadModal = this.loadModal.bind(this);*/
	    this.state = {
	      isOpen: false,
	      lng: null,
	      dropdownOpen: false,
	      dropdownOpenUser: false,

	    };

	}

	parseLanguage(lng) {
		const newLng = lng === 'en' ? 'gb' : lng
		this.setState({
	      	lng: newLng
	    })

	}

	toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	}

	toggleDropdown() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
	}

	toggleDropdownUser() {
	    this.setState({
	      dropdownOpenUser: !this.state.dropdownOpenUser
	    });
	}

	changeLanguage(lng) {
		this.parseLanguage(lng)
     	i18nInstance.changeLanguage(lng)
      	setCookie('i18next',lng, 300)
	}

	componentDidMount() {
		const lng = localStorage.getItem('i18nextLng').substring(0,2) || 'es'
		setCookie('i18next',lng, 300)
		this.parseLanguage(lng)
	}

	/*loadModal() {
		const modal = require('../Modal').default
        this.setState({ loadModal: modal })
	}

	openModal(type) {
		console.log('TYPE',type)
		const key = type == 'register' ? 'showModalRegister' : 'showModalLogin'
		if (!this.state.loadModal) this.loadModal()        	  	
		this.setState({ showModalRegister:true })
	}	*/





	render() {
		const { t, isAuth, logout, openModal } = this.props


		// const Modal = this.state.loadModal
	    return (
	      <div>
	        <Navbar className="navbar navbar-dark bg-dark" expand="md" fixed="top">
	          	<Link href="/"><a className="navbar-brand">{t('home:title')}</a></Link>
	          	<NavbarToggler onClick={this.toggle} />
	          	<Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              	
		              	{isAuth &&
		              	<NavItem>
			          		<Button 
			          			size="sm" 
			          			color="danger"
			          			outline
			          			onClick={() => signOut()}
			          		>Logout
			          		</Button>      	
			          	</NavItem> }
			          	{isAuth &&
			          	<Dropdown isOpen={this.state.dropdownOpenUser} 
		              			  toggle={this.toggleDropdownUser}>
			                <DropdownToggle nav>
			                	<span className="font-weight-bold text-white">User</span>
			                </DropdownToggle>
			                <DropdownMenu>
			                  	<DropdownItem>
			                  		<Link href="/user"><a>Perfil</a></Link>
			                  	</DropdownItem>
			                  	<DropdownItem divider />
			                  	<DropdownItem>
			                  		<Link href="/user"><a>profile</a></Link>
			                  	</DropdownItem>
			                </DropdownMenu>
		              	</Dropdown> }
			          	{!isAuth && 
			          	<NavItem>
			          		<Button 
			          			size="sm" 
			          			color="warning" 
			          			onClick={() => openModal('login')}
			          		>Login
			          		</Button>            	
			          	</NavItem> }

			          	{!isAuth && 
			          	<NavItem>
			          		<Button 
			          			size="sm" 
			          			color="primary" 
			          			onClick={() => openModal('registerSocial')}
			          		>Regístrate
			          		</Button>
			          	</NavItem> }		              	
		              	<Dropdown isOpen={this.state.dropdownOpen} 
		              			  toggle={this.toggleDropdown}
		              			  onMouseLeave={this.toggleDropdown}>
			                <DropdownToggle nav caret>
			                	<span onMouseOver={this.toggleDropdown} 
			                		  className={"flag-icon flag-icon-" + this.state.lng}></span>
			                </DropdownToggle>
			                <DropdownMenuMod onMouseLeave={this.toggleDropdown} right>
			                  	<DropdownItemMod>
			                  		<div onClick={() => this.changeLanguage('es')}>
			                    		<span className="flag-icon flag-icon-es mr-3"></span>
			                    		{t('lang:es')}
			                    	</div>
			                  	</DropdownItemMod>
			                  	<DropdownItemMod divider />
			                  	<DropdownItemMod>
			                  		<div onClick={() => this.changeLanguage('en')}>
			                    		<span className="flag-icon flag-icon-gb mr-3"></span>
			                    		{t('lang:en')}
			                    	</div>	
			                  	</DropdownItemMod>
			                </DropdownMenuMod>
		              	</Dropdown>
		            </Nav>
	          	</Collapse>
	        </Navbar>
        
	      </div>
	    );
	}

}


NavbarComponent.propTypes = {
    isAuth: PropTypes.bool.isRequired
   /* name: PropTypes.string,
    email: PropTypes.string*/

}


export default NavbarComponent