const monData = require('../data/monsters.json');
const spellData = require('../data/spells.json');
const itemData = require('../data/5esrd.json')["Magic Items"];
const itemList = [];


for (let item in itemData){
	itemList.push({name: item, ...itemData[item]});
}

const referenceDefaultState = {
	searchQuery: '',
	searchType: 0,
	monsters: monData,
	visibleMonsters: monData,
	selectedMonster: monData[Math.floor(Math.random() * monData.length)],
	spells: spellData,
	visibleSpells: spellData,
	selectedSpell: spellData[Math.floor(Math.random() * spellData.length)],
	magicItems: itemList,
	visibleMagicItems: itemList,
	selectedMagicItem: itemList[Math.floor(Math.random() * itemData.length)]
}

export default (state = referenceDefaultState, action) => {
	switch (action.type) {
		case "UPDATE_REFERENCE":
			return action.reference;
		default: 
			return state;
	}
}