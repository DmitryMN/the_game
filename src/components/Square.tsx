import React from "react";
import {SquaresType} from "./Board";

type SquarePropsType = {
    value: SquaresType
    callBack: () => void
}

const Square = (props: SquarePropsType) => {

    const onChangeValue = () => {
        props.callBack();
    }

        return (
            <button className="square" onClick={onChangeValue.bind(this)}>
                {props.value}
            </button>
        );
}

export default Square;