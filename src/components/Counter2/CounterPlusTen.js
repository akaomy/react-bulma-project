import React, { useState } from "react";

export default function CounterPlusTen() {

    const [counter, setCount] = useState(0);

    const add = () => {
        setCount(counter + 10);
    }

    const remove = () => {
        setCount(counter - 10)
    }

    return (
        <>
            <div className="container">
                <p>10 Counter</p>
                <p>{counter}</p>
                <button onClick={add} className="button">add</button>
                <button onClick={remove} className="button">remove</button>
            </div>
        </>
    )
}