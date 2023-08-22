import React from "react";
import "./square-styles.scss";

const Square = ({ value, onClick, className }) => {
    const combinedClassNames = `square ${className || ''}`;
    return (
        <button className={combinedClassNames} onClick={onClick} >
            {value}
        </button>
    );
};

export default Square;