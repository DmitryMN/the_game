import React from "react";
import Board from "./Board";


type GamePropsType = {
    text: string
}

class Game extends React.Component {
    constructor(props: GamePropsType) {
        super(props);
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;