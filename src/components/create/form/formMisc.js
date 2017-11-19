import React from 'react';

export const FormSize = (props) => (
		<div value={props.size} onChange={props.handleSize} className="formSize">
			{["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"].map( (s, i) => 
				<div className="formSize__option" data-value={s} key={i}>
					<img 
					alt="Monster Icon"
					src="../../media/minotaur.svg"
					style={{
						height: (props.scale * (i * 0.6 + 1)) + 'rem',
					}}></img>
					<h2>{s}</h2>
				</div>
				)}
		</div>
	)

export const FormMonsterType = (props) => (
		<select id="type" value={props.type} onChange={props.handleType}>
	       <option value="Aberration">Aberration</option>
	       <option value="Beast">Beast</option>
	       <option value="Celestial">Celestial</option>
	       <option value="Construct">Construct</option>
	       <option value="Dragon">Dragon</option>
	       <option value="Elemental">Elemental</option>
	       <option value="Fey">Fey</option>
	       <option value="Fiend">Fiend</option>
	       <option value="Giant">Giant</option>
	       <option value="Humanoid">Humanoid</option>
	       <option value="Monstrosity">Monstrosity</option>
	       <option value="Ooze">Ooze</option>
	       <option value="Plant">Plant</option>
	       <option value="Undead">Undead</option>
		</select>
    )

export const FormName = (props) => (
	<input 
	className="createName" 
	type="text"
	value={props.name || ''}
	placeholder="Name"
	onChange={props.handleName}
	 />
	)