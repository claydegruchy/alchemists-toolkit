import React from 'react';
import logo from './logo.svg';
import './App.css';
import PotionMaster from  './potion-gen/update.js'
import './potion-gen/caco-ingredients.json' 


var pm = new PotionMaster(1)
console.log( pm.data.components[0])

function App() {
  return (
    <div className="App">
      <header className="App-header">
      haha im posting on the internet!
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
