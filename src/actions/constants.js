export const FIVE_OF_A_KIND  = "FIVE_OF_A_KIND"
export const STRAIGHT_FLUSH  = "STRAIGHT_FLUSH"
export const FOUR_OF_A_KIND  = "FOUR_OF_A_KIND"
export const FULL_HOUSE      = "FULL_HOUSE"
export const FLUSH           = "FLUSH"
export const STRAIGHT        = "STRAIGHT"
export const THREE_OF_A_KIND = "THREE_OF_A_KIND"
export const TWO_PAIR        = "TWO_PAIR"
export const ONE_PAIR        = "ONE_PAIR"
export const HIGH_CARD       = "HIGH_CARD"

const HANDS = [ FIVE_OF_A_KIND, STRAIGHT_FLUSH, FOUR_OF_A_KIND, FULL_HOUSE, FLUSH, STRAIGHT, THREE_OF_A_KIND, TWO_PAIR, ONE_PAIR, HIGH_CARD ]

export const Joker =  {"label": "JOKER", "code": ""}

export const RANK  =  ['Ace','King','Queen','Jack','10','9','8','7','6','5','4','3','2']

export const SUITS =  ['Club','Diamond','Heart','Spade']

// This function needs to move into its own module.. Only constants allowed..
let createDeck  = () => {
	let _deck = []
	RANK.forEach((rank) => {
		SUITS.forEach((suit) => {
			_deck.push({
				"label": rank+" of "+suit,
				"rank" : rank,
				"suit" : suit,
				"code" : ""
			})
		})
	})
	return _deck
}

export const DECK = createDeck()

const MAKE_HAND      		= "MAKE_HAND"
const UPDATE_SCORE   		= "UPDATE_SCORE"
const MOVE_TO_NEXT_QUESTION = "MOVE_TO_NEXT_QUESTION"

export const ACTION_TYPES = [ MAKE_HAND, UPDATE_SCORE, MOVE_TO_NEXT_QUESTION ]
