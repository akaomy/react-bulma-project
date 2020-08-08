import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import AddCounter from "./AddCounter";

import '../../App.css';

export default function Counter3() {
    const [counters, setCounters] = useState([4, 11]);

    return (
        <>
            <p className="title">Counter 3</p>
            <CounterDisplay />
            <hr/>
            <CounterDisplay />
            <hr/>
            <CounterDisplay />
            <AddCounter />
        </>
    )
}