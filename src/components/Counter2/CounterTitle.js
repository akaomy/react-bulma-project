import React from "react";

export default function CounterTitle(props) {
    // const {
    //     addCounter,
    //     countNumber
    // } = this.props;

    return(
        <button className="button">{props.count}</button>
    )
}