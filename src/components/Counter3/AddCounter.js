import React from "react";

export default function AddCounter(props) {
    const addCounter = () => {
        // props.setCount([...props.count, 2]);
        // console.log(props.addCounter())
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