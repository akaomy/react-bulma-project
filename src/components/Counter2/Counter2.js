import React, { useState } from "react";
import SimpleCounter from "./SimpleCounter";
import CounterPlusTen from "./CounterPlusTen";
import CounterRandomOneTen from "./CounterRandomOneTen";
import CounterWithAddBtn from "./CounterWithAddBtn";

export default function Counter2() {

    return (
        <>
            <SimpleCounter />
            <hr />
            <CounterPlusTen />
            <hr />
            <CounterRandomOneTen />
            <hr />
            <CounterWithAddBtn />
        </>
    )
}