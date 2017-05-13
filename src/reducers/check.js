const initialState = {
	score: 0,
	currentHand: "",
	hand:[]
}

export default function check(state = initialState, action) {
	switch(action.type){
		case UPDATE_SCORE:
			let _type = state.getState().currentHand
			let _score = state.getState().score
			if(action.handtype == _type)
				return {
					score: _score+1,
					currentHand: "",
					hand: []
				}
		case MOVE_TO_NEXT_QUESTION:
		case MAKE_HAND:
			let [ min, max ] = [ 0, 10 ]
			let _type    = Math.floor(Math.random()*(max - min)) + min
			let _hand = makeHand(HANDS[_type])
			let _score = state.getState().score
			return {
				score: _score,
				currentHand: HANDS[_type],
				hand: _hand
			}
		default:
			return state
	}


}
