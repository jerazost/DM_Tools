import React from 'react';
import {connect} from 'react-redux';
import {addCombatEntity, removeCombatEntity, updateCombatEntity} from '../../actions/combat';

const mapStateToProps = state => ({
	combatEntities: state.combatEntities
}); 
const mapDispatchToProps = dispatch => ({
	addEntity: entity => {dispatch(addCombatEntity(entity))},
	removeEntity: id => {dispatch(removeCombatEntity(id))},
	updateEntity: (id, entity) => {dispatch(updateCombatEntity(id, entity))}
});
const TrackerCard  = (props) => (
	<div className="monsterTracker__Card">
		<div className="stat-block">
			<div className="creature-heading">
				<h1>{props.name}</h1>
				{!!props.initiative && 
				<h3>Initiative: {props.initiative}</h3>
				}
				<button
				data-uid={props.uid} 
				onClick={props.handleRemoveEntity}>Remove</button>
			</div>
			<svg height="5" width="100%" className="tapered-rule">
		    	<polyline points="0,0 400,2.5 0,5"></polyline>
		  	</svg>
		  	<div className="monsterTracker__Card__HP">
			  	<button 
			  	data-index={props.index}
			  	data-type={"dec"}  
			  	onClick={props.handleIncDec}>-</button>
			  	<h1>HP: {props.hp}</h1>
			  	<button 
			  	data-index={props.index}
			  	data-type={"inc"}
			  	onClick={props.handleIncDec}>+</button>
		  	</div>
		  	<div className="top-stats monsterTracker__Card__ToggleView">
				<div className="property-line first">
					<h4>Armor Class </h4>
					<p>{props.armor_class}</p>
				</div> 
				<div className="property-line">
					<h4>Hit Points </h4>
					<p>{props.hit_points} ({props.hit_dice})</p>
				</div> 
				<div className="property-line last">
					<h4>Speed </h4>
					<p>{props.speed}</p>
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
		 		   <polyline points="0,0 400,2.5 0,5"></polyline>
				</svg>
				<div className="abilities">
					<div className="ability-strength">
						<h4>STR</h4>
						<p>{props.strength} ({Math.floor((props.strength - 10) / 2)})</p>
					</div> 
					<div className="ability-dexterity">
						<h4>DEX</h4>
						<p>{props.dexterity} ({Math.floor((props.dexterity - 10) / 2)})</p>
					</div>
					<div className="ability-constitution">
						<h4>CON</h4>
						<p>{props.constitution} ({Math.floor((props.constitution - 10) / 2)})</p>
					</div> 
					<div className="ability-intelligence">
						<h4>INT</h4>
						<p>{props.intelligence} ({Math.floor((props.intelligence - 10) / 2)})</p>
					</div> 
					<div className="ability-wisdom">
						<h4>WIS</h4>
						<p>{props.wisdom} ({Math.floor((props.wisdom - 10) / 2)})</p>
					</div> 
					<div className="ability-charisma">
						<h4>CHA</h4>
						<p>{props.charisma} ({Math.floor((props.charisma - 10) / 2)})</p>
					</div> 
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
				  <polyline points="0,0 400,2.5 0,5"></polyline>
				</svg>
		  		{ props.damage_immunities && 
		  			<div className="property-line first">
						<h4>Damage Immunities </h4>
						<p>{props.damage_immunities}</p>
					</div> 
		  		}
				{ props.condition_immunities &&
					<div className="property-line">
						<h4>Condition Immunities </h4>
						<p>{props.condition_immunities}</p>
					</div> 
				}
				{ props.senses &&
					<div className="property-line">
						<h4>Senses </h4>
						<p>{props.senses}</p>
					</div>
				}
				{
					props.languages &&
					<div className="property-line">
						<h4>Languages: {props.languages}</h4>
					</div> 
				}
				<div className="property-line last">
					<h4>Challenge: </h4>
					<p> {props.challenge_rating}</p>
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
				  <polyline points="0,0 400,2.5 0,5"></polyline>
				</svg>
			</div> 
		</div>
	</div>
	)

class MonsterTracker extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			monsters: this.props.combatEntities
		}
	};

	handleRemoveEntity = e => {
		const uid = e.target.dataset.uid;
		const entities = [...this.state.monsters];
		entities.filter(e => e.uid !== uid);
		this.setState({monsters: entities});
		this.props.removeEntity(uid);
	};

	handleIncDec = (e) => {
		const i = e.target.dataset.index;
		const type = e.target.dataset.type;
		const trackedMonsters = [...this.state.monsters];
		console.log(trackedMonsters)
		if (type === 'inc'){
			trackedMonsters[i].hp++;
		} else if (type === 'dec'){
			trackedMonsters[i].hp--;
		}
		
		this.setState({monsters: trackedMonsters}); 
	};

	rollInitiative = (e) => {
		const monsters = [...this.state.monsters];
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

export default connect(mapStateToProps, mapDispatchToProps)(MonsterTracker);
