import React, { useState } from "react";
import CountBtn from "./CountBtn";
import DisplayCount from "./DisplayCount";

import '../../App.css';

export default function Counter3() {
    const [count, setCount] = useState(0);
    const posCounters = [1,2,3];
    const negCounters = [-3,-2,-1];

    const updateCounter = (n) => {
        console.log('count', count);
        setCount(n);
    }

    return (
        <>
            <p className="title">Counter 3</p>
            <div className="container-test">
                <div className="level">
                    <div className="level-left">
                        {posCounters.map((el, i) =>
                            <CountBtn value={el} />
                        )}
                    </div>
                    <div className="level-item">
                        initial value: <DisplayCount />
                    </div>
                    <div className="level-right">
                        {negCounters.map((el, i) =>
                            <CountBtn value={el} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}