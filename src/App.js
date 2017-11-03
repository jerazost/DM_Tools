import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import Navs from './components/navs'

class App extends Component {
  render() {
    return (
      <div>
         <div className="App-header">
          <h1 className="App-title">Dungeon Tools</h1>
        </div>
        <Navs/>
      </div>
    );
  }
}

export default App;
