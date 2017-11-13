import React from 'react';
import DiceRoller from './play/diceRoller'

class Play extends React.Component {
	constructor(props) {
		super(props);
		this.maxSize = 6;
		this.state = {
			rolls: []
		}
	}
	handleRoll = e => {
		const die = e.target.dataset.die;
		const roll = Math.ceil(Math.random() * die);
		let rolls = [...this.state.rolls];
		if(rolls.length > this.maxSize) {
			rolls = rolls.slice(-1 * this.maxSize, rolls.length  )
		}

		this.setState({rolls: [...rolls, roll]});
	}
	render() {
		return (
			<div>
				<DiceRoller rolls={this.state.rolls} handleRoll={this.handleRoll}/>
			</div>
			)
	}
}

export default Play;