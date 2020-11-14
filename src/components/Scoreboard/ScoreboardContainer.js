import React from 'react';
import '../Scoreboard/index.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


export default class ScoreboardContainer extends React.Component {
    state = {
        players: [
        {
            id: 1,
            name: 'John Doe',
            score: 0
        },
        {
            id: 2,
            name: 'Ann Smith',
            score: 0
        }
    ]}
    
    updateScore = (delta, index) => {
        console.log('score is updated: ', delta, index)
    }

    render () {
        return (
            <div className="scoreboardContainer">
                <Header 
                    players={this.state.players}
                />
                {this.state.players.map( (player, i) => {
                    return (
                    <Player 
                        players={this.state.players}
                        updateScore={this.updateScore}
                />
                    )
                } )}
                <AddPlayerForm />
            </div>
        )
    }
}