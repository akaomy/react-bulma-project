import React from 'react';
import CounterTitle from "./CounterTitle";

export default function CounterWithAddBtn() {
    const countNumber = 3;

    return (
        <CounterTitle countNumber={countNumber} />
    )
}