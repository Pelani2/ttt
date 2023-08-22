import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSquare } from "../../Redux/Reducers/gameReducer";
import { calculateWinner } from "../../Redux/Utils/utils";

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
        <div>

        </div>
    );
};