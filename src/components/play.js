import React from 'react';
import DiceRoller from './play/diceRoller'

class Play extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DiceRoller />
			</div>
			)
	}
}

export default Play;