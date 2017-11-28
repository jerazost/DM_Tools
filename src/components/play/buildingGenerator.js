import React from 'react';
//import {generateNPC} from './npcGenerator';
import {capFirst} from '../utils';
import { generateNPC } from './npcGenerator';
const buildings = require('../../data/environments.json').environment.settlement.building;
console.log(buildings);

const pickRandObjKey = object => {
    const keys = Object.keys(object);
    const r = Math.floor(Math.random() * keys.length);
    return keys[r];
}
const pickRandArr = list => {
    const r = Math.floor(Math.random() * list.length);
    return list[r];
}

const generateBuilding = () => {
    const key = pickRandObjKey(buildings);
    const randomBuilding = buildings[key];
    return {
        name: capFirst(key),
        type: pickRandArr(randomBuilding.type),
        size: pickRandArr(randomBuilding.size)
        //name: pickRandArr(randomBuilding.name)
    }  
}

class BuildingGenerator extends React.Component {
    constructor(props) {
		super(props);
		this.state = generateBuilding();
    } 
    generateBuilding = () => {
        this.setState(generateBuilding());
    }
    render() {
        return (
        <div>
            <button onClick={this.generateBuilding}>Generate a Random Building</button>
            {this.state.name && 
            <div className="NPCGenerator__Card stat-block">
                <h1>{this.state.name}</h1>
                <p>{this.state.size}</p>
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <p>{this.state.type}</p>
             </div>
            }
        </div>
    )
    }
}

export default BuildingGenerator;