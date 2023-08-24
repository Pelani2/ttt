import { createSlice } from "@reduxjs/toolkit";
import { calculateWinner } from "../Utils/utils";

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    history: [],
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        updateSquare: (state, action) => {
            const { index } = action.payload;
            if (state.squares[index] || calculateWinner(state.squares)) {
                return;
            }

            state.squares[index] = state.xIsNext ? 'X' : 'O';
            state.xIsNext = !state.xIsNext;

            state.history.push({
                winner: calculateWinner(state.squares),
            });
        },
        resetGame: (state) => {
            state.squares = Array(9).fill(null);
            state.xIsNext = true;
            state.history = [];
        }
    },
});

export const { updateSquare, resetGame } = gameSlice.actions;
export default gameSlice.reducer;