import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSquare } from "../../Redux/Reducers/gameReducer";
import { calculateWinner } from "../../Redux/Utils/utils";
import Square from "../Square";

const Board = () => {
    const squares = useSelector((state) => state.game.squares);
    const xIsNext = useSelector((state) => state.game.xIsNext);
    const dispatch = useDispatch();

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }

        dispatch(updateSquare({ index }));
    };

    const renderSquare = (index) => [
        <Square 
            value={squares[index]}
            onClick={() => handleClick(index)}
        />
    ]

    return(
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}            
                {renderSquare(1)}            
                {renderSquare(2)}            
            </div>
            <div className="board-row">
                {renderSquare(3)}            
                {renderSquare(4)}            
                {renderSquare(5)}            
            </div>
            <div className="board-row">
                {renderSquare(6)}            
                {renderSquare(7)}            
                {renderSquare(8)}            
            </div>
        </div>
    );
};

export default Board;