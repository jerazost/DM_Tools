const monData = require('../data/monsters.json');
const spellData = require('../data/spells.json');
const itemData = require('../data/5esrd.json')["Magic Items"];
const itemList = [];
const npcs = require('../data/npc.json');
console.log(npcs)
for (let item in itemData){
	itemList.push({name: item, ...itemData[item]});
}

const referenceDefaultState = {
	searchQuery: '',
	searchType: 0,
	monsters: monData,
	visibleMonsters: monData.map((mon,id) => ({...mon, id: id})),
	selectedMonster: '',
	spells: spellData,
	visibleSpells: spellData.map((spell,id) => ({...spell, id: id})),
	selectedSpell: '',
	magicItems: itemList,
	visibleMagicItems: itemList.map((item, id) => ({...item, id: id})),
	selectedMagicItem: ''
}

export default (state = referenceDefaultState, action) => {
	switch (action.type) {
		case "UPDATE_REFERENCE":
			return action.reference;
		default: 
			return state;
	}
}