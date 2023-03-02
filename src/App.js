import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({name: "frontend", age: "15"});
    }

    render() {
        return (
            <div className="blocks">
                <p className="p">Имя: {this.state.name}</p>
                <p className="p">Возраст : {this.state.age}</p>
                <button onClick={this.handleClick} className="btn">Press</button>
            </div>
        )
    }

}


export default Button;