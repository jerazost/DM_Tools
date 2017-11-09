import { createStore, combineReducers } from 'redux';
import monstersReducer from '../reducers/monsterList';

export default () => {
  const store = createStore(
    combineReducers({
    	monsters: monstersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};