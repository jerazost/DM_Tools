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
			currentPage: RACE
		}
	}
	render() {
		return (
			<div>
			{this.state.currentPage === RACE && <ChooseRace />}
			{this.state.currentPage === CLASS && <ChooseClass />}	
			</div>
			)
	}
}

export default CreatePlayerForm;