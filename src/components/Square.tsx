import React from "react";
import {SquaresType} from "./Board";

interface SquarePropsType {
    value: SquaresType
    callBack: () => void
}

class Square extends React.Component<SquarePropsType> {

    onChangeValue() {
        this.props.callBack();
    }

    render() {
        return (
            <button className="square" onClick={this.onChangeValue.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;