import React from "react";
import logo from "./logo.svg";
import "./App.css";

import makeAnimated from "react-select/animated";

import PotionMaster from "./potion-gen/update.js";
import "./potion-gen/caco-ingredients.json";

// import Selector from "./ComponentPicker.js";

import CreatableSelect from "react-select/creatable";
import Layout from "./Sidebar.js";

// const handleClick = event => console.log("way to click");

const pm = new PotionMaster(1);
const maxChoices = pm.options.maxComponents;
const options = pm
    .components()
    .slice(0, 10)
    .map(e => ({ ...e, value: e.id, label: e.name }));

var dogshit = {
    effects: [{
            ingredientName: "dog shit",
            active: false,
            name: "Fatigue",
            magnitude: 266,
            complexity: 1,
            originalName: "Fatigue",
            colour: { r: 106, g: 254, b: 183, a: 0.93 },
            maxMagnitude: 1632
        },
        {
            ingredientName: "dog shit",
            active: false,
            name: "Increase Toughness",
            magnitude: 1.16,
            complexity: 1,
            originalName: "Fortify Heavy Armor",
            colour: { r: 0, g: 32, b: 77, a: 1 },
            maxMagnitude: 8.45
        },
        {
            ingredientName: "dog shit",
            active: false,
            name: "Resist Poison",
            magnitude: 1.32,
            complexity: 2,
            originalName: "Resist Poison",
            substanceProperty: "Acidic",
            colour: { r: 60, g: 23, b: 101, a: 0.19 },
            maxMagnitude: 22.849999999999998
        },
        {
            ingredientName: "dog shit",
            active: false,
            name: "Increased cold resistance",
            magnitude: 0.55,
            complexity: 2,
            originalName: "Resist Frost",
            substanceProperty: "Basic",
            colour: { r: 88, g: 170, b: 101, a: 0.94 },
            maxMagnitude: 11.14
        }
    ],
    name: "dog shit",
    complexity: 1,
    id: "bda675c914903287201f268a8afc3d5f298b6198",
    value: "bda675c914903287201f268a8afc3d5f298b6198",
    label: "dog shit"
};

class Selector extends React.Component {
    state = {
        options: this.props.startingOptions,
        selectedOption: null,
        currentPotion: null
    };


    brewPotion = () => console.log(this.state)
    addShit = () => {
        let { options } = this.state
        options.push(dogshit)
        console.log(options)
        this.setState({ options }, () =>
            console.log(`Options updated:`, this.state.options))

    }

    handleChange = selectedOption => {
        if (selectedOption && selectedOption.length > this.props.maxChoices) {
            selectedOption = this.state.selectedOption;
        }

        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    render() {
        // let store = this.props.store;
        const { options } = this.state
        // const { selectedOption } = this.state;
        return (
            <div>
        <Layout>
          <CreatableSelect
            // value={selectedOption}
            createOptionPosition
            onChange={(a,b,c)=>{this.handleChange();console.log(a,b,c)}}
            options={options}
            isMulti={true}
            isClearable={true}
            isOpen={true}
            menuIsOpen={true}
            isSearchable={true}
            closeMenuOnSelect={false}
            styles={{
              // ...customStyles,
              option: base => ({
                ...base,
                border: `1px dotted black`

                // height: 350,
                // minHeight: 350
              }),
              multiValue: base => ({
                ...base,
                border: `2px dotted red`
              })
            }}
            ref={el => (this.selectRef = el)}
            onBlur={() => {
              setTimeout(
                () =>
                  this.selectRef.setState({
                    menuIsOpen: true
                  }),
                5
              );
            }}
          />
        </Layout>

        <div>
          <div>production choice goes here</div>
          <div>Potion render goes here</div>

          <div key="submit-button" className="" onClick={this.brewPotion}>
            Brew!
          </div>

          <div key="addshit" className="" onClick={this.addShit}>
            add shit
          </div>
        </div>
      </div>
        );
    }
}

const sortListing = list => list.sort();

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: state.isSelected ? "red" : "blue",
        padding: 20
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    }
};

function App() {
    return (
        <div className="App">
      <header className="App-header">
        Running with seed: {pm.seed}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="message-box">
          <div name="picker"></div>

          <Selector
            style={customStyles}
            startingOptions={options}
            maxChoices={maxChoices}
          />
        </div>
      </header>
    </div>
    );
}

export default App;