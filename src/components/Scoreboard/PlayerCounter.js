import React from 'react';

export default function PlayerCounter({ index, score, updateScore }) {
    return (
        <div className="counter">
            <button
                onClick={() => updateScore(index, +1)}
                className="counter-action decrement" 
            >+</button>
            <span 
                className="counter-score"
            >{score}</span>
            <button
                onClick={() => updateScore(index, -1)}
                className="counter-action increment"
            >-</button>
        </div>
    );
}