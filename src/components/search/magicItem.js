import React from 'react';
export const MagicItemResultCard = (props) => (
	<div id="resultCard">
		<div className="stat-block">
			<div className="creature-heading">
				<h1>{props.name}</h1>
			</div>
			<svg height="5" width="100%" className="tapered-rule">
			    <polyline points="0,0 400,2.5 0,5"></polyline>
			</svg>
			<div className="actions">
				<h3>Description</h3>
				<p>{props.content || props.table.entries}</p>
			</div>
		</div>
	</div>
	)

export const MagicItemSearchResult = (props) => (
	<div className="search__results__result" data-index={props.index} onClick={props.handleResultClick}>
		<h3 data-index={props.index}>{props.name}</h3>
	</div>
	)