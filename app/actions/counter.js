export const constants = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_SUCCESS: 'COUNTER_SUCCESS',
  COUNTER_ERROR: 'COUNTER_ERROR'
}

// without sagas
/*export const actions = {
  incrementCount: () => ({ type: types.COUNTER_INCREMENT }),
  decrementCount: () => ({ type: types.COUNTER_DECREMENT }),
};
*/

export const incrementCount = () => ({
	type: constants.COUNTER_INCREMENT,
	uri: "?id=aa&ff=22"
})

export const decrementCount = () => ({
	type: constants.COUNTER_DECREMENT,
	uri: "?id=aa&ff=22"
})

export const countSuccess = (count,uri) => ({
	type: constants.COUNTER_SUCCESS,
	count,
	uri
})

export const countError = (error) => ({
	type: constants.COUNTER_ERROR,
	error
})
