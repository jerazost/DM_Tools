import React from 'react';
import DiceRoller from './play/diceRoller'
import MonsterTracker from './play/monsterTracker'


class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePlay: "TRACKER"
		}
	}

	render() {
		return (
			<div>
				<MonsterTracker />
				<DiceRoller />
			</div>
			)
	}
}

export default Play;