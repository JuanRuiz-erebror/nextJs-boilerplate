import { createSelector } from 'reselect';

/**
 * Direct selector to the counter state domain
 */
const selectCounterDomain = (state) => state.get('counter')	


/**
 * Other specific selectors
 */
 const makeSelectUri = () => createSelector(
  selectCounterDomain,
  (substate) => substate.get('uri')
);


/**
 * Default selector used by Counter
 */

const makeSelectCounter = () => createSelector(
  selectCounterDomain,
  (substate) => substate.get('count')
);

export default makeSelectCounter;

export {
	makeSelectCounter,
	makeSelectUri,
  	selectCounterDomain
};
