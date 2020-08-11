import React, {useState} from "react";
import CounterNum from "./CounterNum";

export default function Counter4() {

    const [numbers, setCounters] = useState([0]);
    const addCounter = () => {
        setCounters([...numbers, Math.round(Math.random() * 10)])
    }
    const plusOne = (index) => {
        setCounters([numbers[index] + 1])
    }
    const minusOne = (index) => {
        setCounters([numbers[index] - 1])
    }

    return (
        <>
            {numbers.map((el, i) =>
                <CounterNum
                    count={el}
                    key={i}
                    index={i}
                    plus={plusOne}
                    minus={minusOne}
                />
            )}
            <button
                className='button'
                onClick={addCounter}
            >
                Add Counter
            </button>
        </>
    )
}