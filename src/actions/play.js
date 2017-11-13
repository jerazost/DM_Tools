export const updateDiceRolls = rolls => {
	return ({
		type: 'UPDATE_DICE_ROLL_LIST',
		rolls
	});
}