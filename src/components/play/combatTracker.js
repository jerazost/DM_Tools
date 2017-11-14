import React from 'react';
import {connect} from 'react-redux';
import {addCombatEntity, removeCombatEntity, updateCombatEntity, updateAllEntities} from '../../actions/combat';
import TrackerCard from './trackerCard';

const mapStateToProps = state => ({
	combatEntities: state.combatEntities
});

const mapDispatchToProps = dispatch => ({
	addEntity: entity => {dispatch(addCombatEntity(entity))},
	removeEntity: id => {dispatch(removeCombatEntity(id))},
	updateEntity: (id, entity) => {dispatch(updateCombatEntity(id, entity))},
	updateAllEntities: (entityList) => {dispatch(updateAllEntities(entityList))}
});


class CombatTracker extends React.Component {

	handleRemoveEntity = e => {
		e.stopPropagation();
		const uid = e.target.dataset.uid;
		this.props.removeEntity(uid);
	};

	handleIncDec = (e) => {
		e.stopPropagation();
		const index = e.target.dataset.index;
		const type = e.target.dataset.type;
		const entities = [...this.props.combatEntities];
		if (type === 'INC'){
			entities[index].hp++;
		} else if (type === 'DEC'){
			entities[index].hp--;
		}
		this.props.updateAllEntities(entities)
	};

	rollInitiative = (e) => {
		const monsters = [...this.props.combatEntities];
		monsters.forEach(mon => {
			mon.initiative = Math.ceil(Math.random() * 20);
		});
		this.setState({monsters: monsters});
	};

	render() {
		return (
			<div className="tracker">
			<h1>Monster Tracker</h1> <button 
			onClick={this.rollInitiative}>Roll Initiative</button>
				<div className="monsterTracker">
					{this.props.combatEntities
						.sort(({initiative: a},{initiative: b}) => (a - b))
						.map((mon, i) => 
						<TrackerCard {...mon} 
						handleIncDec={this.handleIncDec}
						handleRemoveEntity={this.handleRemoveEntity}
						index={i} key={i}/>
					)}
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatTracker);
