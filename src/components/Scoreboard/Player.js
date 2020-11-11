import React from 'react';
import PlayerCounter from './PlayerCounter';

export default function Player(props) {
    return (
        <div className="player">
          <span className="player-name">
            <button 
              className="remove-player" 
            >
              x
            </button>
            Player Name
          </span>
          <PlayerCounter 
          />
        </div>
    );
}