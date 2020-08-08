import React from "react";

export default function AddCounter() {
    const addCounter = () => {
        console.log('add new counter')
    }
    return(
        <button
            onClick={addCounter}
            className='button level-item'
        >
            Add counter
        </button>
    )
}