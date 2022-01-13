import { type } from "os";
import React from "react";
import Square from "./Square";

export type SquaresType = string

interface BoardState {
    squares: Array<SquaresType>
    xIsNext: boolean
}

type ValueLines = Array<number>

type LinesType = Array<ValueLines>

class Board extends React.Component<{}, BoardState> {

    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(''),
            xIsNext: true,
        }
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        if(calculateWinner(squares || squares[i])) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ 
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i:number) {
        return <Square value={this.state.squares[i]} callBack={() => {this.handleClick(i)}}/>;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status = winner ? `Winner: ${winner}` : `Next move ${this.state.xIsNext ? 'X' : 'O'}`

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

const calculateWinner = (squares: Array<SquaresType>) => {
    const lines: LinesType = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return '';
}

export default Board;
