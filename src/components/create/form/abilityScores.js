import React from 'react';
class AbilityScores extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		}
	};

	handleIncDec = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const type = e.target.dataset.type;
		const ability = e.target.dataset.ability;
		switch(type){
			case 'INC':
			this.setState(
				{[ability.toLowerCase()]: this.state[ability.toLowerCase()] + 1},
				() => {this.props.handleAbilityScores(this.state)}
			)
			break;
			case 'DEC':
			this.setState(
				{[ability.toLowerCase()]: this.state[ability.toLowerCase()] + -1},
				() => {this.props.handleAbilityScores(this.state)}
			)
			break;
			default: 
				console.log('Error');
		}
		return false;
	}

	render() {
		return (
		<div className="abilityScores">
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.strength} ability="Strength"/>
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.dexterity} ability="Dexterity"/>
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.constitution} ability="Constitution"/>
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.intelligence} ability="Intelligence"/>
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.wisdom} ability="Wisdom"/>
			<AbilityScore handleIncDec={this.handleIncDec} value={this.state.charisma} ability="Charisma"/>
		</div>
		
	)
	}
}


const AbilityScore = (props) => (
	<div className="form__container">
			<div className="form__ability_score">
				<h3>{props.ability}</h3>
				<button data-type="DEC" data-ability={props.ability} onClick={props.handleIncDec}>-</button>
				<h2>{props.value}</h2>
				<button data-type="INC" data-ability={props.ability} onClick={props.handleIncDec}>+</button>
			</div>
		</div>
	
	)
export default AbilityScores