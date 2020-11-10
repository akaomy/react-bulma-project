import React from 'react'

export default function AddPlayerForm () {
    return (
        <div className="add-player-form">
            <label for="player-name"></label>
            <input id="player-name"></input>
            <button>Add player</button>
        </div>
    );
}