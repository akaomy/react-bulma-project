import React, { useState } from 'react';
import CounterNum from './CounterNum';

export default function Counter4() {

    const [counters, setCounters] = useState([0]);
    const addCounter = () => {
        setCounters([...counters, Math.round(Math.random() * 10)])
    }
    const plusOne = (index) => {
        const newCounters = [...counters];
        newCounters[index] += 1;
        setCounters(newCounters);
        console.log(index)
    }
    const minusOne = (index) => {
        const newCounters = [...counters];
        newCounters[index] -= 1;
        setCounters(newCounters);
        console.log(index)
    }
    const deleteCounter = (index) => {
        const newCounters = [...counters];
        newCounters.splice(index, 1);
        setCounters(newCounters);
        console.log(newCounters);
    }
    const resetCounter = (index) => {
        const newCounters = [...counters];
        newCounters[index] -= 1;
        setCounters(newCounters);
        console.log(index)
    }

    return (
        <>
            {counters.map((el, i) =>
                <CounterNum
                    count={el}
                    key={i}
                    index={i}
                    plus={plusOne}
                    minus={minusOne}
                    deleteCounter={deleteCounter}
                    resetCounter={resetCounter}

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