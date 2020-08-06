import React, {useState} from "react";
import '../../App.css';

export default function CountBtn(props) {

    return (
        <button className="button counter-btn">{props.value}</button>
    )

}