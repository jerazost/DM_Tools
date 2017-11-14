const uuidv1 = require('uuid/v1');
export const addCombatEntity = (entity) => {
	entity.uid = uuidv1();
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

export const updateCombatEntity= (uid, entity) => {
	return ({
		type: 'UPDATE_COMBAT_ENTITY',
		uid, entity
	})
}