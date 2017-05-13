import React, {Component, PropTypes} from 'react'
import makeHand, {HANDS} from '../../actions/hands'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createHand from '../../actions/actions'
import * as cardActionCreators from '../../actions/actions'

export default class DealArea extends Component {
	constructor(props){
		super(props)
	}

	render() {
		let [ min, max ] = [ 0, 10 ]
		let _type    = Math.floor(Math.random()*(max - min)) + min
		let hand = makeHand(HANDS[_type])
		//createHand()
		//console.log(this.props.currentHand)
		//let hand = store.getState().hand
		return (
			<ol>{
				hand.map((card, index) => {
					return(<li key={index}> {card.label} </li>)
				})
			}
			</ol>
		)
	}
}
