import React from 'react';
import ChooseSkillsAndEquipment from './form/skillsAndEquipment';
import ChooseRace from './form/races';
import ChooseClass from './form/classes';

const RACE = 0;
const CLASS = 1;
const SKILLS_EQUIPMENT = 2;

class CreatePlayerForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: SKILLS_EQUIPMENT
		}
		this.order = [RACE, CLASS, SKILLS_EQUIPMENT]
	}
	handleNext = e => {
		this.setState({currentPage: this.state.currentPage + 1});	
	};
	handleback = e => {
		this.setState({currentPage: this.state.currentPage - 1});
	};
	render() {
		return (
			<div className="createContainer">
			{this.state.currentPage === RACE && <ChooseRace 
				handleBack={this.handleback}
				handleNext={this.handleNext}
				/>}
			{this.state.currentPage === CLASS && <ChooseClass 
				handleBack={this.handleback}
				handleNext={this.handleNext}
				/>}
			{this.state.currentPage === SKILLS_EQUIPMENT && <ChooseSkillsAndEquipment
				handleBack={this.handleback}
				handleNext={this.handleNext}
			/>}
			</div>
			)
	}
}

export default CreatePlayerForm;