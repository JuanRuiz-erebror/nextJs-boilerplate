import PropTypes from 'prop-types'

// components can get props of parent page
export default WrappedComponent => {
	class WithServerProps extends React.Component {
	    static async getInitialProps({ pathname, router}) {
	      	return { pathname, router }
	    }

	    getChildContext() {
	    	console.log('UUUUUUU',this.props)
	      	return { pathname: this.props.pathname }
	    }
	    
	    render() {
	      	return <WrappedComponent />
	    }
	}

	WithServerProps.childContextTypes = {
    	pathname: PropTypes.string.isRequired
  	}

	return WithServerProps
}	  	