import React from 'react';
import PlayerCounter from './PlayerCounter';

export default class Player extends React.Component {

    render() {
      const {
        score,
        index,
        updateScore,
        name
      } = this.props;

      return (
        <div className="player">
          <span className="player-name">
            <button 
              className="remove-player" 
            >x</button>
            {name}
          </span>
          <PlayerCounter 
            score={score}
            index={index}
            updateScore={updateScore}
          />
        </div>
      );
    }
}