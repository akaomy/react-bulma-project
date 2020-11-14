import React from 'react';

export default function Stats(props) {
    console.log(props)
    const totalScore = props.players.reduce((accumulator, player) => {
        return accumulator + player.score
    }, 0)
    return (
        <div className="stats">
            <p>Players: {props.players.length}</p>
            <p>Total Points: {totalScore}</p>
        </div>
    );
}