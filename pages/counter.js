import React from 'react';
import PropTypes from 'prop-types';
import ActiveLink from '../app/components/ActiveLink'
import { compose } from 'redux';
import Counter from '../app/containers/Counter'
import {incrementCount, decrementCount} from '../app/actions/counter';
import { connect } from 'react-redux'
import withReduxSaga from '../app/lib/store/withReduxSaga';
import { createStructuredSelector } from 'reselect';
import { makeSelectCounter } from '../app/selectors/counter'

class CounterPage extends React.Component {


	render() {
		console.log('props',this.props)
		// const count = this.props.count
	    return (
	    	<div>
	    		<p>Counter!</p>
	    		<ActiveLink href="/counter">Counter</ActiveLink>
	    		
	            <Counter/>
	            {/*<p>{count}</p>*/}
	    	</div>	
	    )
	}
}



export default withReduxSaga(CounterPage)
