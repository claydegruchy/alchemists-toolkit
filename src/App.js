import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PotionMaster from "./potion-gen/update.js";
import "./potion-gen/caco-ingredients.json";

import ComponentPicker from "./ComponentPicker.js";
import Layout from "./Sidebar.js";

const pm = new PotionMaster(1);
const options = pm.components();


var selectionState = { selections: [] }

///this isnt working
const conditions = {
    isWorking: (list, id) => console.log("this function has been run"),
    getSelections: (list, id) => { selectionState = list }
}

var output = () => {
    return (
        <h1>
    out
    </h1>
    )
}

var generatePotion = (e) => {
    var productionEffects = [
        "Crushing",
        "Disolve in water",
        "philosophers stone"
    ]



    console.log(pm.createPotion(productionEffects, selectionState.selections))

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
            callbackFunction={(selections)=>selectionState = selections}
            conditions={conditions}
             />
          </div>
        </Layout>
        <div>
        {output()}
        </div>
        <div
          key="nglkivcdfufejkuejcferefjvhlvgcjt"
          onClick={e => generatePotion(e)}
          className=""
        >
          Submit
        </div>

      </header>
    </div>
    );
}

export default App;