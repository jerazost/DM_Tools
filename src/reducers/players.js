const savedPlayersFromStorage = window.localStorage.getItem('players') || [];

export default (state = savedPlayersFromStorage, action) => {
	switch(action.type){
		case 'ADD_PLAYER':
			return [...state, ...action.player];
		case 'REMOVE_PLAYER':
			return state.filter(p => p.uuid !== action.uuid);
		default: 
			return new Error('Wrong action type in customMonsters reducer');
	}
};