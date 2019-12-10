import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PotionMaster from "./potion-gen/update.js";
import "./potion-gen/caco-ingredients.json";

import ComponentPicker from "./ComponentPicker.js";
import Layout from "./Sidebar.js";

const pm = new PotionMaster(1);
const options = pm.components();

var selectionState = { selections: [] };

// ///this isnt working
// const conditions = {
//   isWorking: (list, id) => console.log("this function has been run"),

// };

var output = () => {
    return <h1>out</h1>;
};

var Dogs = class ResultContainer extends React.Component {
    render(props) {
        return (
            <div className="message-box">Hello {this.state.productionEffects[0]}</div>
        );
    }
};

class StateContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { components: ["placeholder"], productionEffects: ["Crush"] };
        this.updateComponents = this.updateComponents.bind(this);
        this.updateProduction = this.updateProduction.bind(this);
    }

    updateComponents(id) {

      var t = "components"
        console.log("is this in array", this.state)
        var { components } = this.state
        if (components.includes(id)) {
            components = components.filter(item => item != id)
        } else {
            components.push(id)
        }

        this.setState({ ...this.state, components: components }, console.log("updateComponents", this.state.components, id));

    }


    updateProduction(id) {
        this.setState({ ...this.state, productionEffects: id }, console.log("updateProduction", this.state.productionEffects));
    }

    render() {
        //define passback conditions




        const onSelectProduction = (e) => this.updateProduction(e)
        const onSubmit = (e) => console.log(this.state)
        // var submitPotion = (e) => {  }

        return (
            <div className="message-box">
        <Layout>
          <div name="picker">
            <ComponentPicker
              options={options}
              callbackFunction={this.updateComponents}
              state={this.state}
              
            />
          </div>
        </Layout>
        <div>production choice goes here{output()}</div>
        <div>Potion render goes here{output()}</div>

        <div
          key="submit-button"
          onClick={e => onSubmit(e)}
          className=""
        >
          Submit
        </div>
        {this.props.children}
      </div>
        );
    }
}

// var generatePotion = e => {
//     var productionEffects = [
//         "Crushing",
//         "Disolve in water",
//         "philosophers stone"
//     ];
//     // State.updateState(["Mash"], []);
//     console.log();
//     // console.log(pm.createPotion(productionEffects, selectionState.selections));
// };

function App() {
    return (
        <div className="App">
      <header className="App-header">
        Running with seed: {pm.seed}
        <img src={logo} className="App-logo" alt="logo" />
        <StateContainer>
          <div>im another thing</div>
        </StateContainer>
      </header>
    </div>
    );
}

export default App;