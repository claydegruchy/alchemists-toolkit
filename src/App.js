import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PotionMaster from "./potion-gen/update.js";
import "./potion-gen/caco-ingredients.json";



const options = [
  { id: "chocolate", name: "Chocolate" },
  { id: "strawberry", name: "Strawberry" },
  { id: "vanilla", name: "Vanilla" }
];

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.options = options;

    this.state = {
      selections: []
    };

    this.handleClick = this.handleClick.bind(this);

    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleAddition = this.handleAddition.bind(this);
  }

  handleClick(event, id) {
    // event.preventDefault();
    // this.state.selections.
    console.log("The link was clicked.", event, id);
    if (this.state.selections.includes(id)) this.handleDelete(id);
    if (!this.state.selections.includes(id)) this.handleAddition(id);
  }

  handleAddition(selection) {
    console.log("running handleAddition");
    this.setState(state => ({ selections: [...state.selections, selection] }));
    console.log(this.state);
  }

  handleDelete(id) {
    console.log("running handleDelete");
    const { selections } = this.state;
    this.setState({
      selections: selections.filter(i => i !== id)
    });
  }

  render() {
    return (
      <div>
        {this.options.map((option, i) => {
          var className = this.state.selections.includes(option)
            ? "[Selected]"
            : "";
          return (
            <div
              key={option.id}
              value={option.id}
              onClick={e => this.handleClick(e, option)}
              className={className}
            >
              {className +" "+ option.name}
            </div>
          );
        })}
      </div>
    );
  }
}

// {dropdown("placeholder",options)}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>hello</button>
        haha im posting on the internet!
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Reservation />
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
