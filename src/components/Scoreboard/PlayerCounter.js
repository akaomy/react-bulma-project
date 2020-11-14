import React from 'react';

export default function PlayerCounter(props) {
    return (
        <div className="counter">
            <button
                onClick={() => props.updateScore(1, 2)}
                className="counter-action decrement" 
            >+</button>
            <span 
                className="counter-score"
            >0</span>
            <button
                onClick={() => props.updateScore(-1, -2)}
                className="counter-action increment"
            >-</button>
        </div>
    );
}