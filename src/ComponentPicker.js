import React from "react";

// export function SmartButton(props) {
//     const classes = useStyles();

//     return (
//         <div
//                             key={props.key}
//                             value={props.value}
//                             onClick={props.onClick}
//                             className={props.className}>

//                         </div>
//     );
// }

export default class ComponentPicker extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options;
        // this.conditions = props.conditions;
        this.callbackFunction = props.callbackFunction;
        // this.selected = props.selected;
        // this.conditions = props.conditions;

        // console.log()

        this.state = props.state;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, id) {
        console.log("The link was clicked.", event, id, this.props.selected);

        this.callbackFunction(id, this.update);

        // this.callbackFunction()
        // if (this.state.selections.includes(id)) {
        //     return this.handleDelete(id);
        // } else if (!this.state.selections.includes(id)) {
        //     return this.handleAddition(id);
        // }
        // Object.keys(this.conditions).map(fn => this.conditions[fn](this.state.selections, id))
    }
    updateState(state) {
        console.log(state)
        this.setState(state)
    }


    // handleAddition(selection) {
    //     const { selections } = this.state;

    //     selections.push(selection);

    //     this.setState(
    //         state => ({
    //             selections: selections
    //         }),
    //         () => {
    //             this.callbackFunction(this.state.selections);
    //         }
    //     );
    // }

    // handleDelete(id) {
    //     var { selections } = this.state;

    //     this.setState(
    //         {
    //             selections: selections.filter(i => i !== id)
    //         },
    //         () => {
    //             this.callbackFunction(this.state.selections);
    //         }
    //     );
    // }

    render() {
        return (
            <div>
                {this.options.map((option, i) => {
                    // var className = this.state.selected.includes(option.id)
                    //     ? "[Selected]"
                    //     : "";
                    return (
                        <div
                            key={option.id}
                            value={option.id}
                            onClick={e => this.handleClick(e, option.name)}
                            // className={className}
                        >
                            {
                                // className + 
                                " " + option.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}