import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

export default function Header() {
    return (
        <div className="columns">
            <Stats />
            <Stopwatch />
        </div>
    );
}