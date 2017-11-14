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

	handleActiveChange = e =>  {
		const newPlay = e.target.dataset.play
	}

	render() {
		return (
			<div>
			{this.state.activePlay === "TRACKER" &&
				<MonsterTracker />
			}
				<DiceRoller />
			</div>
			)
	}
}

export default Play;