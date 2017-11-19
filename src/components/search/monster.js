import React from 'react';

export const MonsterSearchResult = (props) => (
	<div className="search__results__result" data-index={props.index}>
		<h3 data-index={props.index}>{props.name}</h3>
		<p data-index={props.index}>{props.size} {props.type}</p>
	</div>
)

export const MonsterResultCard = (props) => (
	<div className="resultCard">
		<div className="stat-block wide">
			<div className="section-left">
				<div className="creature-heading">
					<h1>{props.name}</h1>
					<h2>{props.size} {props.type}, {props.alignment}</h2>
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
			   	 <polyline points="0,0 400,2.5 0,5"></polyline>
			  	</svg>
				<div className="top-stats">
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
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			  </svg>
			  {
			  	props.special_abilities && props.special_abilities.map((ability, i) => (
			  		<div className="property-block" key={i}>
						<h4>{ability.name}. </h4>
						<p>{ability.desc}</p>
						{ability.attack_bonus !== 0 &&
						<p>Attack Bonus: {ability.attack_bonus}</p>}
					</div> 
			  		))
			  }
			  <button className="resultCard__AddButton" 
			  onClick={props.add}>Add to combat</button>
			</div> 
			<div className="section-right">
				{
					props.actions && 
					<div className="actions">
					<h3>Actions</h3> 
						{props.actions.map((action, i) => (
							<div className="property-block" key={i}>
								<h4>{action.name}.</h4>
								<p>{action.desc}</p>
							</div>
						))}
					</div>

				}
				{
					props.legendary_actions && 
					<div className="actions">
					<h3>Legendary Actions</h3> 
						{props.legendary_actions.map((action, i) => (
							<div className="property-block" key={i}>
								<h4>{action.name}.</h4>
								<p>{action.desc}</p>
							</div>
						))}
					</div>
				}
			</div> 
		</div> 
	</div>
)