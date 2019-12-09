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
        this.conditions = props.conditions

        this.state = {
            selections: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, id) {
        // event.preventDefault();
        // this.state.selections.
        console.log("The link was clicked.", event, id, this.conditions);



        if (id && this.state.selections.includes(id)) this.handleDelete(id);
        // Object.keys(this.conditions).map(fn => this.conditions[fn](this.state.selections, id))

        if (id && !this.state.selections.includes(id)) this.handleAddition(id);
    }

    handleAddition(selection) {
        // console.log("running handleAddition");
        this.setState(state => ({
            selections: [...state.selections, selection]
        }));
    }

    handleDelete(id) {
        // console.log("running handleDelete");
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
                            {className + " " + option.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}