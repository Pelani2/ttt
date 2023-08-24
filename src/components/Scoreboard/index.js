import React from "react";
import { useSelector } from "react-redux";
import "./scoreboard-styles.scss";

const Scoreboard = () => {
    const history = useSelector((state) => state.game.history);

    return (
        <div className="scoreboard">
            <h2>
                Scoreboard
            </h2>
            <ul>
                {history.map((game, index) => (
                    <li key={index}>
                        Game {index + 1}: {game.winner || "Draw"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Scoreboard;