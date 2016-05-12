'use strict';

// for user
export const LOGGED_IN 	= 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_DOING = 'LOGGED_DOING';

let secc = {'name': 'haha','status':'go'}
let fail = {'name': 'aiai','status':'back'}

export function logIn(opt) {
  return { 
  	'type': LOGGED_IN, 
  	'user': secc,
  }
}

export function nullLogin(){
	return {
		'type': LOGGED_IN,
		'user': fail,
	}
}

//退出登录
export function logOut(){
	return {
		'type': LOGGED_OUT,
	}
}