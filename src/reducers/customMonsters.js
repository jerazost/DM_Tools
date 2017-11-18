const customMonstersFromStorage = window.localStorage.getItem('customMonsters') || [];

export default (state = customMonstersFromStorage, action) => {
	switch(action.type){
		case 'ADD_MONSTER':
			return [...state, ...action.monster];
		case 'REMOVE_MONSTER':
			return state.filter(m => m.uuid !== action.uuid);
		default: 
			return new Error('Wrong action type in customMonsters reducer');
	}
};