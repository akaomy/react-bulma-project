import React from 'react';

export default function PlayerCounter(props) {
    return (
        <>
            <span>+</span>
            <span>{props.players.length}</span>
            <span>-</span>
        </>
    );
}