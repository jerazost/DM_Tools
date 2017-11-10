import React from 'react';
import {AlignmentChart} from './form/alignment';
import AbilityScores from './form/abilityScores';
import {FormSize, FormName} from './form/formMisc';

class CreatePlayerForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<FormName/>
				<AbilityScores />
				<AlignmentChart/>
			</div>
			)
		
	}
}

export default CreatePlayerForm;