import React from 'react';

export default function Stats(props) {
    return (
        <div className="stats">
            <p>Players:{props.players.length}</p>
            <p>Total Points:0</p> {/*props.players.score*/}
        </div>
    );
}