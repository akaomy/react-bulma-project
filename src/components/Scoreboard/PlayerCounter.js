import React from 'react';

export default function PlayerCounter() {
    return (
        <div className="counter">
            <button
                className="counter-action decrement" 
            >+</button>
            <span 
                className="counter-score"
            >0</span>
            <button
                className="counter-action increment"
            >-</button>
        </div>
    );
}