export const constants = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_SUCCESS: 'COUNTER_SUCCESS',
  COUNTER_ERROR: 'COUNTER_ERROR'
};

//without sagas
/*export const actions = {
  incrementCount: () => ({ type: types.COUNTER_INCREMENT }),
  decrementCount: () => ({ type: types.COUNTER_DECREMENT }),
};
*/

export const incrementCount = () => ({
	type: constants.COUNTER_INCREMENT,
})

export const decrementCount = () => ({
	type: constants.COUNTER_DECREMENT,
})


export const countSuccess = (count) => ({
	type: constants.COUNTER_SUCCESS,
	count
})

export const countError = (error) => ({
	type: constants.COUNTER_ERROR,
	error
})