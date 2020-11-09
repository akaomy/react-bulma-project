import React from 'react';
import '../Scoreboard/index.css';
import Header from './Header';
import Player from './Player';

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
    render () {
        return (
            <div className="scoreboard">
                <Header />
                <Player />
                {/* AddPlayerForm */}
            </div>
        )
    }
}