import React from "react";
import { useSelector } from "react-redux";
import "./scoreboard-styles.scss";

const Scoreboard = () => {
    const history = useSelector((state) => state.game.history);
    const playerWins = history.filter((player) => player === "X").length;
    const opponentWins = history.filter((player) => player === "O").length;

    return (
        <div className="scoreboard">
            <h2>
                Winner History
            </h2>
            <ul>
                <p>
                    Player X wins: {playerWins}
                </p>
                <p>
                    Player O wins: {opponentWins}
                </p>
            </ul>
        </div>
    );
};

export default Scoreboard;