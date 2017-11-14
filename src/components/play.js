import React from 'react';
import DiceRoller from './play/diceRoller'
import CombatTracker from './play/combatTracker'


class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePlay: "TRACKER"
		}
	}

	handleActiveChange = e =>  {
		const newPlay = e.target.dataset.play;
		this.setState({activePlay: newPlay});
	}

	render() {
		return (
			<div>
			{this.state.activePlay === "TRACKER" &&
				<CombatTracker />
			}
				<DiceRoller />
			</div>
			)
	}
}

export default Play;