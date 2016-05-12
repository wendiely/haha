'use strict';

import * as TYPES from '../actions/types';

const initialState = {
	isLoggedIn: false,
	user: {},
	loginStatus: null,
};

export default function user(state=initialState, action){
	const { isLoggedIn, user, loginStatus } = state;
	switch(action.type){
		case TYPES.LOGGED_DOING:
			return {
				...state,
				loginStatus: 'doing'
			};

		case TYPES.LOGGED_IN:
			return {
				...state,
				isLoggedIn: true,
				user: action.user,
				loginStatus: 'done'
			};

		case TYPES.LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
				user: {},
				loginStatus: null
			};

	}
	return state;

}