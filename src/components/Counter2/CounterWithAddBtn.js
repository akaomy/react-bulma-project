import React, {useState} from 'react';
import CounterTitle from "./CounterTitle";

export default function CounterWithAddBtn() {

    const [counters, seCounters] = useState([2,3])

    const addCounter = () => {
        const randNum = Math.round(Math.random() * 10)
        seCounters([...counters, 'one more']);
    };

    // const removeCounter = () => {
    //     seCounters([])
    // }

    return (
        <>
            <p>Counter with add btn:</p>
            {counters.map((el,i) =>
                <CounterTitle
                    count={el}
                    key={i}
                />
            )}
            <button
                className="button"
                onClick={addCounter}>
                Cick to add one more counter
            </button>
            {/*<button*/}
            {/*    className="button"*/}
            {/*    onClick={removeCounter}>*/}
            {/*    Cick to delete*/}
            {/*</button>*/}
        </>
    )
}