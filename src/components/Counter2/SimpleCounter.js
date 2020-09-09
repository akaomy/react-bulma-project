import React, { useState } from "react";

export default function SimpleCounter() {

    const [counter, setCount] = useState(0);

    const add = () => {
        setCount(counter + 1);
    }

    const remove = () => {
        setCount(counter - 1)
    }

    return (
        <>
            <div className="container">
                <p>Simple Counter</p>
                <p>{counter}</p>
                <button onClick={add} className="button">add</button>
                <button onClick={remove} className="button">remove</button>
            </div>
        </>
    )
}