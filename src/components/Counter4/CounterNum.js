import React from "react";
import '../../App.css'

export default function CounterNum(props) {
    return (
        <>
            {/*index: {props.index}*/}
            <button
                onClick={() => props.minus(props.index)}
                className='button cntr4'
            >
                -
            </button>
            <span className='cntr4'>{props.count}</span>
            <button
                onClick={() => props.plus(props.index)}
                className='button cntr4'
            >
                +
            </button>
            <br/>
        </>
    )
}