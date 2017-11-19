import React from 'react';
//import {FormSize} from './form/formMisc';
import ChooseRace from './form/races';

class CreatePlayerForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<ChooseRace />
			</div>
			)
	}
}

export default CreatePlayerForm;