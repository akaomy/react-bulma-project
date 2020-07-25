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
            <p className="title">Counter3</p>
            <div className="container3-counter">
                <div className="container3-btns">
                    {posCounters.map((el, i) =>
                        <CountBtn counter={el} />
                    )}
                </div>
                <p className="counter3--init-val">initial value: {0} </p>
                <div className="container3-btns">
                    {negCounters.map((el, i) =>
                        <CountBtn counter={el} />
                    )}
                </div>
            </div>
        </>
    )

}