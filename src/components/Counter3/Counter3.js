import React, {useState} from "react";
import CountBtn from "./CountBtn";
import '../../App.css';

export default function Counter3() {
    const countArrPos = [3,2,1];
    const countArrNeg = [-1,-2,-3];

    const [posCounters, setPosCounters] = useState(countArrPos);
    const [negCounters, setNegCounters] = useState(countArrNeg);

    return (
        <>
            <p className="title">Counter 3</p>
            <div className="container-test">
                <div className="level">
                    <div className="level-left">
                        {posCounters.map((el, i) =>
                            <CountBtn counter={el} />
                        )}
                    </div>
                    <div className="level-item">
                        initial value: {0}
                    </div>
                    <div className="level-right">
                        {negCounters.map((el, i) =>
                            <CountBtn counter={el} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}