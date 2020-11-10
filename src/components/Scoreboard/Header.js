import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

export default function Header(props) {
    return (
        <div className="columns">
            <Stats players={props.players}/>
            <Stopwatch />
        </div>
    );
}