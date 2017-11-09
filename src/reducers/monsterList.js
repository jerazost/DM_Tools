const monsterListReducerDefaultState = [];

export default (state = monsterListReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOM_MONSTER':
			return [...state, action.customMonster];
		case 'REMOVE_CUSTOM_MONSTER':
			return state.filter(mon => {
				mon.id != action.id
			});
		default: 
			return state;
	}
}