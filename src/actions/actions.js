// ACTION CREATORS

import {ACTION_TYPES} from './constants'

const [ MAKE_HAND, UPDATE_SCORE, MOVE_TO_NEXT_QUESTION ] = ACTION_TYPES

let createHand = () => {
	return {
		type: MAKE_HAND
	}
}

let submitAnswer = (handtype) => {
	// Adds the hand type to the state
	return {
		type: UPDATE_SCORE,
		handtype
	}
}

let moveToNextQuestion = () => {
	return {
		type: MOVE_TO_NEXT_QUESTION
	}
}

export { createHand, submitAnswer, moveToNextQuestion }
