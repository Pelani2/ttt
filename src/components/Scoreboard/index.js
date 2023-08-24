import React from "react";
import { useSelector } from "react-redux";
import "./scoreboard-styles.scss";

const Scoreboard = () => {
    const history = useSelector((state) => state.game.history);
    const playerWins = history.filter((player) => player === "X").length;
    const opponentWins = history.filter((player) => player === "O").length;

    return (
        <div className="scoreboard-container">
            <h2 className="scoreboard-title">
                Winner History
            </h2>
            <ul className="score-list"> 
                <li className="score-item">
                    <span className="player-name">
                        Player X
                    </span>
                    <span className="win-count">
                        {playerWins}
                    </span>
                </li>
                <li className="score-item">
                    <span className="player-name">
                        Player O 
                    </span>
                    <span className="win-count">
                        {opponentWins}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Scoreboard;