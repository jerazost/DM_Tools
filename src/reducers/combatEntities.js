export default (state = [], action) => {
	switch (action.type) {
		case "ADD_COMBAT_ENTITY":
			return [...state, action.entity];
		case "REMOVE_COMBAT_ENTITY": 
			return state.filter(entity => entity.uid !== action.uid);
		case "UPDATE_ALL_ENTITIES":
			return !!state.entityList ? state.entityList : [];
		default: 
			return state;
	}
}