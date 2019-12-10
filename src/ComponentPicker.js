import React from "react";

import Select from "react-select";

import Store from './Store.js'

import CreatableSelect from 'react-select/creatable';

import Layout from "./Sidebar.js";

 class Selector extends React.Component {


    state = {
        selectedOption: null
    };



    handleChange = selectedOption => {
        if (selectedOption && selectedOption.length > this.props.maxChoices) {
            selectedOption = this.state.selectedOption;
        }

        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    render() {

        let store = this.props.store

        const { selectedOption } = this.state;
        return (

            <Layout>
            <CreatableSelect
        value={selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
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
        );
    }
};


export default Store.withStore(Selector)