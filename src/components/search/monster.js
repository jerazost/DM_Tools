import React from 'react';
export const MonsterSearchResult = (props) => (
	<div className="search__results__result" id={props.id} onClickCapture={props.handleResultClick}>
		<h3 id={props.id}>{props.name}</h3>
		<p id={props.id}>{props.size} {props.type}</p>
	</div>
)

export const MonsterResultCard = (props) => (
	<div className="resultCard">
		<div class="stat-block wide">
			<hr class="orange-border" />
			<div class="section-left">
				<div class="creature-heading">
					<h1>{props.name}</h1>
					<h2>{props.size} {props.type}, {props.alignment}</h2>
				</div> 
				<svg height="5" width="100%" class="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			  </svg>
				<div class="top-stats">
					<div class="property-line first">
						<h4>Armor Class</h4>
						<p>{props.armor_class}</p>
					</div> 
					<div class="property-line">
						<h4>Hit Points</h4>
						<p>{props.hit_points} ({props.hit_dice})</p>
					</div> 
					<div class="property-line last">
						<h4>Speed</h4>
						<p>{props.speed}</p>
					</div> 
					<svg height="5" width="100%" class="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			  </svg>
					<div class="abilities">
						<div class="ability-strength">
							<h4>STR</h4>
							<p>{props.strength} ({Math.floor((props.strength - 10) / 2)})</p>
						</div> 
						<div class="ability-dexterity">
							<h4>DEX</h4>
							<p>{props.dexterity} ({Math.floor((props.dexterity - 10) / 2)})</p>
						</div>
						<div class="ability-constitution">
							<h4>CON</h4>
							<p>{props.constitution} ({Math.floor((props.constitution - 10) / 2)})</p>
						</div> 
						<div class="ability-intelligence">
							<h4>INT</h4>
							<p>{props.intelligence} ({Math.floor((props.intelligence - 10) / 2)})</p>
						</div> 
						<div class="ability-wisdom">
							<h4>WIS</h4>
							<p>{props.wisdom} ({Math.floor((props.wisdom - 10) / 2)})</p>
						</div> 
						<div class="ability-charisma">
							<h4>CHA</h4>
							<p>{props.charisma} ({Math.floor((props.charisma - 10) / 2)})</p>
						</div> 
					</div> 
					<svg height="5" width="100%" class="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			  </svg>
			  		{ props.damage_immunities && 
			  			<div class="property-line first">
							<h4>Damage Immunities </h4>
							<p>{props.damage_immunities}</p>
						</div> 
			  		}
					{ props.condition_immunities &&
						<div class="property-line">
							<h4>Condition Immunities </h4>
							<p>{props.condition_immunities}</p>
						</div> 
					}
					{ props.senses &&
						<div class="property-line">
							<h4>Senses </h4>
							<p>{props.senses}</p>
						</div>
					}
					{
						props.languages &&
						<div class="property-line">
							<h4>Languages: {props.languages}</h4>
						</div> 
					}
					<div class="property-line last">
						<h4>Challenge: </h4>
						<p> {props.challenge_rating}</p>
					</div> 
				</div> 
				<svg height="5" width="100%" class="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			  </svg>
			  {
			  	props.special_abilities && props.special_abilities.map(ability => (
			  		<div class="property-block">
						<h4>{ability.name}. </h4>
						<p>{ability.desc}</p>
						{ability.attack_bonus != 0 &&
						<p>Attack Bonus: {ability.attack_bonus}</p>}
						
					</div> 
			  		))
			  }
			</div> 
			<div class="section-right">
				{
					props.actions && 
					<div className="actions">
					<h3>Actions</h3> 
						{props.actions.map(action => (
							<div class="property-block">
								<h4>{action.name}.</h4>
								<p>{action.desc}</p>
							</div>
						))}
					</div>

				}
				{
					props.legendary_actions && 
					<div className="actions">
					<h3>Actions</h3> 
						{props.legendary_actions.map(action => (
							<div class="property-block">
								<h4>{action.name}.</h4>
								<p>{action.desc}</p>
							</div>
						))}
					</div>

				}
			</div> 
			<hr class="orange-border bottom" />
		</div> 
	</div>
)