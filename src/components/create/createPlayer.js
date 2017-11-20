import React from 'react';
//import {FormSize} from './form/formMisc';
import ChooseRace from './form/races';
import ChooseClass from './form/classes'

const RACE = 0;
const CLASS = 1;

class CreatePlayerForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: CLASS
		}
		this.order = [RACE, CLASS]
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
			</div>
			)
	}
}

export default CreatePlayerForm;