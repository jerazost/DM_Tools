import React from 'react';
import CreateMonsterForm from './create/createMonster';

export default class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="createPage">
				<CreateMonsterForm />
			</div>
		)
	}
}