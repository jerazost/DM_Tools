import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore();

const App = () => (
	<Provider store={store}>
    	<AppRouter />
    </Provider>
  	)

export default App;