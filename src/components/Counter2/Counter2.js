import React, { useState } from "react";
import SimpleCounter from "./SimpleCounter";
import CounterPlusTen from "./CounterPlusTen";
import CounterRandomOneTen from "./CounterRandomOneTen";

export default function Counter2() {

    return (
        <>
            <SimpleCounter />
            <CounterPlusTen />
            <CounterRandomOneTen />
        </>
    )
}