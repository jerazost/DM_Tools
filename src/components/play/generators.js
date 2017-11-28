import React from 'react';
import NPCGenerator from './npcGenerator';
import BuildingGenerator from './buildingGenerator';

class Generators extends React.Component {
    render() {
        return (
        <div>
            <div className="flex-row">
                <NPCGenerator />
                <BuildingGenerator />
            </div>
        </div>
    )
    }
}

export default Generators;