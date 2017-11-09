export default (monsters, {text}) => {
	return monsters.filter(monster => {
		const textMatch = monster.name.toLowerCase().includes(text);
		return textMatch;
	});
}