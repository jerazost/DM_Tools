import React from 'react';
import CreateMonsterForm from './create/createMonster';
import CreatePlayerForm from './create/createPlayer';
import CreateItemForm from './create/createItem';

export default class Create extends React.Component {

	constructor(props) {
		super(props);
		this.state = {activeState: 'PLAYER'}
	}
	switchView = (e) => {
		if(e.target.dataset.view)
		this.setState({activeState: e.target.dataset.view});
	}
	render() {
		return (
			<div className="page">
			<div className="page__select" onClick={this.switchView}>
				<h1 data-view='MONSTER' className={this.state.activeState === 'MONSTER' ? 'page__select__option--active' : ''}>Monster</h1>
				<h1 data-view='PLAYER' className={this.state.activeState === 'PLAYER' ? 'page__select__option--active' : ''}>Player</h1>
				<h1 data-view='ITEM' className={this.state.activeState === 'ITEM' ? 'page__select__option--active' : ''}>Item</h1>
			</div>
			{this.state.activeState === 'MONSTER' && <CreateMonsterForm />}
			{this.state.activeState === 'PLAYER' && <CreatePlayerForm />}
			{this.state.activeState === 'ITEM' && <CreateItemForm />}
			</div>
		)
	}
}