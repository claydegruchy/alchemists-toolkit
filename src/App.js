import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PotionMaster from "./potion-gen/update.js";
import "./potion-gen/caco-ingredients.json";

import ComponentPicker from "./ComponentPicker.js";
import Layout from "./Sidebar.js";

const pm = new PotionMaster(1);
const options = pm.components();


///this isnt working
const conditions = {
    maxAdditives: (list, id) => {return []}
}

function App() {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Layout>
          <div name="picker">
            <ComponentPicker 
            options={options} 
            conditions={conditions} />
          </div>
        </Layout>
        <div
          key="nglkivcdfufejkuejcferefjvhlvgcjt"
          onClick={e => console.log(e)}
          className=""
        >
          Submit
        </div>
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