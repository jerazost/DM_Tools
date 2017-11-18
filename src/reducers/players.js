const savedPlayersFromStorage = window.localStorage.getItem('players') || [];

export default (state = savedPlayersFromStorage, action) => {
	switch(action.type){
		case 'ADD_PLAYER':
			return [...state, ...action.player];
			break;
		case 'REMOVE_PLAYER':
			return state.filter(p => p.uuid !== action.uuid);
			break;
		default: 
			return new Error('Wrong action type in customMonsters reducer');
	}
};