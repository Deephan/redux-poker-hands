import React, {Component, PropTypes} from 'react'
import {HANDS} from '../../actions/hands'


let check = (e) => {
	alert(e.target.value)
	//submitAnswer(e.target.value) // Instead of directly calling action creators we can call subscribe this event to the store.. (?)
	//moveToNextQuestion()
}

let PokerHands = (props) => {
	return (
		<ul>{
			HANDS.map((hand) => {
				return(<li><input type="button" onClick={check} value={hand}/></li>)
			})
		}
		</ul>
	)
}

export default class ButtonsPanel extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<PokerHands/>
		)
	}
}
