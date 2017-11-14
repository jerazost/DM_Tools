import React from 'react';
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
			  	data-type={"DEC"}  
			  	onClick={props.handleIncDec}>-</button>
			  	<h1>HP: {props.hp}</h1>
			  	<button 
			  	data-index={props.index}
			  	data-type={"INC"}
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
export default TrackerCard;