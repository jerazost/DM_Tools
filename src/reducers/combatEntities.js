export default (state = [], action) => {
	switch (action.type) {
		case "ADD_COMBAT_ENTITY":
			return [...state, action.entity];
		case "REMOVE_COMBAT_ENTITY": 
			return state.filter(entity => entity.uid !== action.uid);
		default: 
			return state;
	}
}