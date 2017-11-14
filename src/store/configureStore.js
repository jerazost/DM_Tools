import { createStore, combineReducers } from 'redux';
import monstersReducer from '../reducers/monsterList';
import monsterCreateReducer from '../reducers/monsterCreate';
// import playersReducer from '../reducers/players';
import rollsReducer from '../reducers/rolls';
import referenceReducer from '../reducers/reference';
import combatEntitiesReducer from '../reducers/combatEntities';

export default () => {
  const store = createStore(
    combineReducers({
    	monsters: monstersReducer,
    	monsterCreate: monsterCreateReducer,
    	// players: playersReducer,
    	reference: referenceReducer,
      combatEntities: combatEntitiesReducer,
    	rolls: rollsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};