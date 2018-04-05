import test from 'tape';

import { put, call, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { authorize } from '../sagas/login-saga.jsx'
import * as api from '../api.jsx'
import * as actions from '../actions2.jsx'


test('login Saga test', (assert) => {

  	
  	const uri = 'username=pepe&password=pepe'
  	const config = api.configHeader.user(uri)
  	const endpoint = '/sessions/create'

  	const gen = authorize(endpoint,config)

	assert.deepEqual(
	    gen.next().value,
	    call(api.get,endpoint,config),
	    'authorize Saga must call'
	)

	let user = '{"id_token":"aaa","access_token":"aaa"}'

	

	assert.deepEqual(
	    gen.next(user).value,
	    put(actions.loginSuccess(JSON.parse(user))),
	    'authorize Saga must put login Success'
	) 
	console.log('user',user)
	assert.deepEqual(
	    gen.next(user).value,
	    call(api.setStore, [
	    					{name:'id_token',value:"aaa"},
                           	{name:'access_token',value:"aaa"},
                      	]),
	    'authorize Saga must set store'
	) 

  	assert.end()

  // now what ?
});