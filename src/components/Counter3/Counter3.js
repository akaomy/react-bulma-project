import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

import '../../App.css';
// import AddCounter from "./AddCounter";

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
            {/*<AddCounter />*/}
        </>
    )
}