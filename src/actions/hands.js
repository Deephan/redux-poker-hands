//import * from './constants'
var _ = require('lodash')

const FIVE_OF_A_KIND  = "FIVE_OF_A_KIND"
const STRAIGHT_FLUSH  = "STRAIGHT_FLUSH"
const FOUR_OF_A_KIND  = "FOUR_OF_A_KIND"
const FULL_HOUSE      = "FULL_HOUSE"
const FLUSH           = "FLUSH"
const STRAIGHT        = "STRAIGHT"
const THREE_OF_A_KIND = "THREE_OF_A_KIND"
const TWO_PAIR        = "TWO_PAIR"
const ONE_PAIR        = "ONE_PAIR"
const HIGH_CARD       = "HIGH_CARD"

export const HANDS = [FIVE_OF_A_KIND, STRAIGHT_FLUSH, FOUR_OF_A_KIND, FULL_HOUSE, FLUSH, STRAIGHT, THREE_OF_A_KIND, TWO_PAIR, ONE_PAIR, HIGH_CARD]

const Joker =  {"label": "JOKER", "code": ""}

const RANK  =  ['Ace','King','Queen','Jack','10','9','8','7','6','5','4','3','2']

const SUITS =  ['Club','Diamond','Heart','Spade']

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

let fiveOfAKind = () => {
	let _hand = []
	let rank = _.sample(RANK)
	SUITS.forEach((suit) => {
		_hand.push({
			"label": rank+" of "+suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	_hand.push(Joker)
	//console.log(_hand)
	return _hand
}

let straightFlush = () => {
	let [ min, max ] = [ 0, RANK.length + 1 ]
	let _start    = Math.floor(Math.random()*(max - min)) + min
	let _end      = _start + 5
	let ranks     = _.slice(RANK.concat(RANK), _start, _end)
	let suit      = _.sample(SUITS)
	let _hand     = []
	ranks.forEach((rank) => {
		_hand.push({
			"label": rank + " of " + suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	//console.log(_hand)
	return _hand
}

let fourOfAKind = () => {
	let _hand = []
	let _fifthCard = _.sample(DECK)
	let rank = _.sample(RANK)
	while(_fifthCard.rank === rank) rank = _.sample(RANK) // A cleaner way to do this check?
	_hand.push(_fifthCard)
	SUITS.forEach((suit) => {
		_hand.push({
			"label": rank + " of " + suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	//console.log(_hand)
	return _hand
}

let fullHouse = () => {
	let _hand = []
	let _ranks = _.sampleSize(RANK, 2) // Choose two ranks at random
	let _times = [3,2] // The number of cards of the first rank and the number of cards of the second rank
	_times.forEach((times, index) => {
		_.sampleSize(SUITS, times).forEach((suit) => {
			let rank = _ranks[index]
			_hand.push({
				"label": rank + " of " + suit,
				"rank" : rank,
				"suit" : suit,
				"code" : ""
			})
		})
	})
	//console.log(_hand)
	return _hand
}

let flush = () => {
	let _hand  = []
	let _times = 5
	let suit = _.sample(SUITS)
	_.sampleSize(RANK, _times).forEach((rank) => {
		_hand.push({
			"label": rank+" of "+suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	//console.log(_hand)
	return _hand
}

let straight = () => {
	let [ min, max ] = [ 0, RANK.length + 1 ]
	let _start    = Math.floor(Math.random()*(max - min)) + min
	let _end      = _start + 5
	let ranks     = _.slice(RANK.concat(RANK), _start, _end)
	let _hand     = []
	ranks.forEach((rank) => {
		let suit      = _.sample(SUITS)
		_hand.push({
			"label": rank + " of " + suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	//console.log(_hand)
	return _hand
}

let threeOfAKind = () => {
	let _hand = []
	let _ranks = _.sampleSize(RANK, 3) // Choose three ranks at random
	let _times = [3,1,1] // No of cards of first rank, no of cards of second rank, No of cards of third rank
	_times.forEach((times, index) => {
		_.sampleSize(SUITS, times).forEach((suit) => {
			let rank = _ranks[index]
			_hand.push({
				"label": rank + " of " + suit,
				"rank" : rank,
				"suit" : suit,
				"code" : ""
			})
		})
	})
	//console.log(_hand)
	return _hand
}

let twoPair = () => {
	let _hand = []
	let _ranks = _.sampleSize(RANK, 3) // Choose three ranks at random
	let _times = [2,2,1] // No of cards of first rank, no of cards of second rank, No of cards of third rank
	_times.forEach((times, index) => {
		_.sampleSize(SUITS, times).forEach((suit) => {
			let rank = _ranks[index]
			_hand.push({
				"label": rank + " of " + suit,
				"rank" : rank,
				"suit" : suit,
				"code" : ""
			})
		})
	})
	//console.log(_hand)
	return _hand
}

let onePair = () => {
	let _hand = []
	let _ranks = _.sampleSize(RANK, 4) // Choose four ranks at random
	let _times = [2,1,1,1] // No of cards of first rank, no of cards of second rank, No of cards of third rank
	_times.forEach((times, index) => {
		_.sampleSize(SUITS, times).forEach((suit) => {
			let rank = _ranks[index]
			_hand.push({
				"label": rank + " of " + suit,
				"rank" : rank,
				"suit" : suit,
				"code" : ""
			})
		})
	})
	//console.log(_hand)
	return _hand
}

let highCard = () => {
	let _hand = []
	let _ranks = _.sampleSize(RANK, 5) // Choose five ranks at random
	_ranks.forEach((rank) => {
		let suit = _.sample(SUITS)
		_hand.push({
			"label": rank + " of " + suit,
			"rank" : rank,
			"suit" : suit,
			"code" : ""
		})
	})
	//console.log(_hand)
	return _hand
}

let makeHand = (type) => {
	switch(type){
		case FIVE_OF_A_KIND:  return fiveOfAKind()
		case STRAIGHT_FLUSH:  return straightFlush()
		case FOUR_OF_A_KIND:  return fourOfAKind()
		case FULL_HOUSE:      return fullHouse()
		case FLUSH:           return flush()
		case STRAIGHT:        return straight()
		case THREE_OF_A_KIND: return threeOfAKind()
		case TWO_PAIR:        return twoPair()
		case ONE_PAIR:        return onePair()
		case HIGH_CARD:       return highCard()
		default:              return null
	}
}

export {makeHand as default}
