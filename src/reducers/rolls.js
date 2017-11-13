const rolls= [];

export default (state = rolls, action) => {
	switch (action.type) {
		case 'UPDATE_DICE_ROLL_LIST':
			return [...action.rolls];
		default: 
			return state;
	}
}