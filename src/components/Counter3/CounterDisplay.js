import React, { useState } from "react";
import CountBtn from "./CountBtn";

import '../../App.css';

export default function CounterDisplay() {
    const [count, setCount] = useState(0);
    const posCounters = [1,2,3];
    const negCounters = [-3,-2,-1];

    const updateCounter = (n) => {
        setCount(n);
    }

    return (
        <>
            <div className="container-test">
                <div className="level">
                    <div className="level-left">
                        {posCounters.map((el, i) =>
                            <CountBtn
                                value={el}
                                key={i}
                                count={count}
                                updateCounter={updateCounter}
                            />
                        )}
                    </div>
                    <div className="level-item">
                        initial value: {count}
                    </div>
                    <div className="level-right">
                        {negCounters.map((el, i) =>
                            <CountBtn
                                value={el}
                                key={i}AddCounter
                                count={count}
                                updateCounter={updateCounter}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}