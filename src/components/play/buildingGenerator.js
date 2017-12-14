import React from 'react';
//import {generateNPC} from './npcGenerator';
import {capFirst} from '../utils';
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
    let loop = true;
    while(loop){
        loop = false;
        try{
            const buildingKey = pickRandObjKey(buildings);
            const randomBuilding = buildings[buildingKey];
            const typeKey = pickRandObjKey(randomBuilding.type);
            const randomType = randomBuilding.type[typeKey];
            console.log(randomType);
            let building = {
                name: capFirst(buildingKey),
                typeText: capFirst(typeKey),
                size: pickRandArr(randomBuilding.size),
                detail: pickRandArr(randomType.detail),
                secret: pickRandArr(randomType.secret),
                generalFeature: pickRandArr(randomBuilding.general_feature)
            }
            return building;
        }catch(e){
            loop = true;
        }
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
                <p>{this.state.typeText}</p>
                <p>{this.state.detail}</p>
                <p>{this.state.secret}</p>
                <p>{this.state.generalFeature}</p>
             </div>
            }
        </div>
    )
    }
}

export default BuildingGenerator;