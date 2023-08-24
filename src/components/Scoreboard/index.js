import React from "react";
import { useSelector } from "react-redux";
import "./scoreboard-styles.scss";

const Scoreboard = () => {
    const winnerHistory = useSelector((state) => state.game.history);

    return (
        <div className="scoreboard">
            <h2>
                Winner History
            </h2>
            <ul>
                {winnerHistory.map((winner, index) => (
                    <li key={index}>
                        {`Game ${index + 1}: ${winner.player}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Scoreboard;