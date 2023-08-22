import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../Reducers/gameReducer";

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

export default store;