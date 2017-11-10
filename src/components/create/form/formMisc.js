import React from 'react';
export const FormSize = (props) => (
		<select name="size" value={props.size} onChange={props.handleSize}>
			<option value="tiny">Tiny</option>
			<option value="small">Small</option>
			<option value="medium">Medium</option>
			<option value="large">Large</option>
			<option value="huge">Huge</option>
			<option value="gargantuan">Gargantuan</option>
		</select>
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