import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {incrementCount, decrementCount} from '../../actions/counter';
import { connect } from 'react-redux'
import { compose } from 'redux';
import withReduxSaga from '../../lib/store/withReduxSaga';
import { createStructuredSelector } from 'reselect';
import { makeSelectCounter, makeSelectUri } from '../../selectors/counter'

const Counter = (props) => {

    console.log('propComponent',props)
    const { count } = props;

    return (
        <div>
            <div></div>
            <button onClick={props.handleIncrementClick}>
              +
            </button>
            <button onClick={props.handleDecrementClick}>
              -
            </button>
            <p>{count}</p>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    count: makeSelectCounter(),
    uri: makeSelectUri()
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrementClick: () => dispatch(incrementCount()),
        handleDecrementClick: () => dispatch(decrementCount())
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(Counter)


// const withConnect = connect(mapStateToProps, mapDispatchToProps);
// export default connect(mapStateToProps)(Counter)