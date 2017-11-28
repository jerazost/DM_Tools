import React from 'react';
import {connect} from 'react-redux';
const npc = require('../../data/npc.json');
const names = require('../../data/names.json');

const pickRandRecursive = list => {
	let type = typeof list;
	if(type === 'array'){
		const r = Math.floor(Math.random() * list.length);
		type = typeof list[r];
		if(type === 'string') {
			return list[r];
		}else if(type === 'object' || type === 'array'){
			return pickRandRecursive(list[r]);
		}

	}else if (type === 'object') {
		const keys = Object.keys(list);
		const r = Math.floor(Math.random() * keys.length);
		const val = list[keys[r]];
		type = typeof val;
		if (type === 'string') return val;
		else if (type === 'object' || type === 'array') return pickRandRecursive(val);
	}else{
		console.error('Improper type passed to pickRandRecursive')
	}
}

class NPCGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	} 
	generateNPC = () => {
		this.setState({
			name: pickRandRecursive(names), 
			appearance: pickRandRecursive(npc.appearance),
			low_ability: pickRandRecursive(npc.abilities.low_ability),
			high_ability: pickRandRecursive(npc.abilities.high_ability),
			talent: pickRandRecursive(npc.talents),
			interaction_trait: pickRandRecursive(npc.interaction_traits),
			mannerism: pickRandRecursive(npc.mannerisms),
			ideal_1: pickRandRecursive(npc.ideals),
			ideal_2: pickRandRecursive(npc.ideals),
			bond: pickRandRecursive(npc.bonds),
			secret: pickRandRecursive(npc.flaws_and_secrets)
		},() => console.log(this.state));
	}

	render() {
		return (
			<div className="NPCGenerator">
          <button onClick={this.generateNPC}>Generate a Random NPC</button>
          <br></br>
        {this.state.name && 
          <div className="NPCGenerator__Card stat-block">
            <h1>{this.state.name}</h1>
            <svg height="5" width="100%" className="tapered-rule">
              <polyline points="0,0 400,2.5 0,5"></polyline>
              </svg>
            <p>A {this.state.interaction_trait} person.</p>
            <p> With {this.state.appearance}</p>
            <p>{this.state.high_ability} but {this.state.low_ability}</p>
            <p>{this.state.talent}</p>
            <p>{this.state.mannerism}</p>
            <p><strong>Secret:</strong> {this.state.secret}</p>
          </div>
        }
			</div>
			);
	}
}

export default connect()(NPCGenerator);