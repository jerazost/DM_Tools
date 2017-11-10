const monsterListReducerDefaultState = [];

export default (state = monsterListReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOM_MONSTER':
			return [...state, action.monster];
		default: 
			return state;
	}
}