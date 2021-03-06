import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header'
import Search from './components/search';
import Create from './components/create';
import Play from './components/play';

const AppRouter = () => (
	<BrowserRouter>
		<div> 
          <Header/>
          <div className="App-body">
			  <Switch>
			  	<Route path='/' component={Search} exact={true}/>
	          	<Route path='/reference' component={Search}/>
	          	<Route path='/play' component={Play}/>
	          	<Route path='/create' component={Create}/>
	          </Switch>
          </div>
		</div>
	</BrowserRouter>
	)

export default AppRouter;