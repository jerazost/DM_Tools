import React from 'react';

const Nav = (props) => (
	<div className="nav">{props.text}</div>
	);

export default () => (
	<div className="navs">
    	<Nav text="Reference"/>
    	<Nav text="Create"/>
    	<Nav text="Play"/>
    </div>
	);