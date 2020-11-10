import React from 'react';
import PlayerCounter from './PlayerCounter';

export default function Player(props) {
    return (
        <div className="columns player">
            {props.players.map(p => {
                return <p>{p.name}</p>
            })}
            <PlayerCounter/>
        </div>
    );
}