import React from 'react';
import DiceRoller from './play/diceRoller';
import CombatTracker from './play/combatTracker';
import Generators from './play/generators';

class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeState: "GENERATORS"
		}
	}

	switchView = e =>  {
		const newPlay = e.target.dataset.view;
		this.setState({activeState: newPlay});
	}

	render() {
		return (
			<div>
				<div className="page__select" onClick={this.switchView}>
					<h1 data-view='COMBAT' 
					className={this.state.activeState === 'COMBAT' ? 'page__select__option--active' : ''}
					>Combat Tracker</h1>
					<h1 data-view='GENERATORS' 
					className={this.state.activeState === 'GENERATORS' ? 'page__select__option--active' : ''}
					>Generators</h1>
				</div>
			{this.state.activeState === "COMBAT" && <CombatTracker />}
			{this.state.activeState === "GENERATORS" && <Generators />}
				<DiceRoller />
			</div>
			)
	}
}

export default Play;