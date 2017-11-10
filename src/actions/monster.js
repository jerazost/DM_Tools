export const editMonster = (monster) => {
	return ({
		type: 'EDIT_MONSTER',
		monster

	});
}

export const addCustomMonster = (monster) => {
	return ({
		type: 'ADD_CUSTOM_MONSTER',
		monster
	});
}