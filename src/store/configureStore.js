import { createStore, combineReducers } from 'redux';
import monstersReducer from '../reducers/monsterList';
import monsterCreateReducer from '../reducers/monsterCreate';

export default () => {
  const store = createStore(
    combineReducers({
    	monsters: monstersReducer,
    	monsterCreate: monsterCreateReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};