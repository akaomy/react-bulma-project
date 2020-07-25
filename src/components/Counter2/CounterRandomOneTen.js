import React, { useState } from "react";

export default function CounterRandomOneTen() {

    const [counter, setCount] = useState(0);

    const add = () => {
        setCount(counter + Math.floor(Math.random() * Math.floor(10)));
    }

    const remove = () => {
        setCount(counter - Math.floor(Math.random() * Math.floor(10)));
    }

    return (
        <>
            <div className="container">
                <p>Random Counter (range 1 to 10)</p>
                <p>{counter}</p>
                <button onClick={add} className="button">add</button>
                <button onClick={remove} className="button">remove</button>
            </div>
        </>
    )
}