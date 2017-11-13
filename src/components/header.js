import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	  <div className="App-header">
		<h1 className="App-title">Dungeon Tools</h1>
		<header className="navs">
	    	<NavLink className ="nav" to="/reference"> Reference </NavLink>
	    	<NavLink  className ="nav" to="/play"> Play </NavLink>
			<NavLink  className ="nav" to="/create"> Create </NavLink>
	    </header>
	  </div>
	);

export default Header;