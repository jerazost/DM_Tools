

export const addCombatEntity = (entity) => {
	entity.hp = entity.hit_points; 
	return ({
		type: 'ADD_COMBAT_ENTITY',
		entity
	});
}

export const removeCombatEntity = (uid) => {
	return ({
		type: 'REMOVE_COMBAT_ENTITY',
		uid
	});
}

export const updateCombatEntity = (uid, entity) => {
	return ({
		type: 'UPDATE_COMBAT_ENTITY',
		uid, entity
	})
}
export const updateAllEntities = (entityList) => {
	return ({
		type: "UPDATE_ALL_ENTITIES",
		entityList
	})

}