const customMonstersFromStorage = JSON.parse(window.localStorage.getItem('monsters')) || [];

export default (state = customMonstersFromStorage, action) => {
	switch(action.type){
		case 'ADD_CUSTOM_MONSTER':
			return [...state, ...action.monster];
		case 'REMOVE_MONSTER':
			return state.filter(m => m.uuid !== action.uuid);
		default: 
			return state;
	}
};