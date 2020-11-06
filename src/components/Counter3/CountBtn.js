import React, {useState} from "react";
import '../../App.css';

export default function CountBtn(props) {
    const send = () => {
        props.updateCounter(props.value + props.count);
    }

    return (
        <button
            className="button counter-btn"
            onClick={send}
        >
            {props.value}
        </button>
    )

}