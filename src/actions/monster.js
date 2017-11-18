export const editMonster = (monster) => {
	return ({
		type: 'EDIT_MONSTER',
		monster

	});
}

export const addCustomMonster = (monster) => {
	let monsters = JSON.parse(window.localStorage.getItem('monsters') || "[]");
	monsters = [...monsters, monster];
	console.log(monsters);
	window.localStorage.setItem('monsters', JSON.stringify(monsters));
	return ({
		type: 'ADD_CUSTOM_MONSTER',
		monster
	});
}