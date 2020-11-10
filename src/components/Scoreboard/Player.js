import React from 'react';
import PlayerCounter from './PlayerCounter';

export default function Player(props) {
    return (
        <>
            {props.players.map(p => {
                return <p>{p.name}</p>
            })}
            <PlayerCounter players={props.players}/>
        </>
    );
}