import React from 'react';
export const SpellSearchResult = (props) => (
	<div className="search__results__result" id={props.id} onClick={props.handleResultClick}>
		<h3 id={props.id}>{props.name}</h3>
		<p id={props.id}>{props.level} {props.school}</p>
	</div>
	)

export const SpellResultCard = (props) => (
	<div id="resultCard">
		<div className="stat-block">
				<div className="creature-heading">
					<h1>{props.name}</h1>
					<h2>{props.level} {props.school}</h2>
				</div>
				<svg height="5" width="100%" className="tapered-rule">
			    	<polyline points="0,0 400,2.5 0,5"></polyline>
			  	</svg>
				<div className="property-line first">
					<h4>Class </h4>
					<p>{props.class}</p>
				</div> 
				<div className="property-line">
					<h4>Duration </h4>
					<p>{props.duration}</p>
				</div> 
				<div className="property-line">
					<h4>Range </h4>
					<p>{props.range}</p>
				</div> 
				<svg height="5" width="100%" className="tapered-rule">
			    	<polyline points="0,0 400,2.5 0,5"></polyline>
			  	</svg>
				<div className="actions">
					<h3>Description</h3>
					<p>{props.desc}</p>
				</div>
		</div>
	</div>
	)