import { createSelector } from 'reselect';

const selectAuthDomain = (state) => state.get('auth');


const makeSelectUsername = () => createSelector(
    selectAuthDomain,
    (substate) => substate.getIn(['userData', 'name'])
)

const makeSelectLastname = () => createSelector(
    selectAuthDomain,
    (substate) => substate.getIn(['userData', 'lastname'])
)

const makeSelectEmail = () => createSelector(
    selectAuthDomain,
    (substate) => substate.getIn(['userData', 'email'])
)

const makeSelectPassword = () => createSelector(
    selectAuthDomain,
    (substate) => substate.getIn(['userData', 'password'])
)

const makeSelectLoading = () => createSelector(
    selectAuthDomain,
    (substate) => substate.get('loading')
)

const makeSelectError = () => createSelector(
    selectAuthDomain,
    (substate) => substate.get('error')
)

const makeSelectIsAuthenticated = () => createSelector(
    selectAuthDomain,
    (substate) => substate.get('isAuthenticated')
)

const makeSelectRemember = () => createSelector(
    selectAuthDomain,
    (substate) => substate.get('remember')
)

const makeSelectTypeForm = () => createSelector(
    selectAuthDomain,
    (substate) => substate.get('typeForm')
)

export default selectAuthDomain

export {
    makeSelectUsername,
    makeSelectLastname,
    makeSelectEmail,
    makeSelectPassword,
    makeSelectLoading,
    makeSelectError,
    makeSelectIsAuthenticated,
    makeSelectTypeForm
    
}
