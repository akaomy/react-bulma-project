import React from "react";
import '../../App.css'

export default function CounterNum(props) {
    const {
        minus,
        plus,
        count,
        index,
        resetCounter,
        deleteCounter
    } = props;
    return (
        <>
            {/*index: {props.index}*/}
            <button onClick={() => minus(index)} className='button cntr4'>-</button>
            <span className='cntr4'>{count}</span>
            <button onClick={() => plus(index)} className='button cntr4'> + </button>
            <button onClick={() => deleteCounter(index)} className='button cntr4'>delete</button>
            <button onClick={() => resetCounter(index)} className='button cntr4'>reset</button>

            <br/>
        </>
    )
}