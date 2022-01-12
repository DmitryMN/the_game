import React from "react";

interface SquarePropsType {
    value: number
}

interface SquareState {
    value: any
}

class Square extends React.Component<SquarePropsType, SquareState> {
    constructor(props: SquarePropsType) {
        super(props);
        this.state = {
            value: null
        };
    }

    onChangeValue() {
        this.setState({value: "X"});
    }


    render() {
        return (
            <button className="square" onClick={this.onChangeValue.bind(this)}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;