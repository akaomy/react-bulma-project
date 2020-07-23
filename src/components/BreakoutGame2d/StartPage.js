import React, { useEffect } from "react";
import '../../App.css';

export default function StartPage() {

    // useEffect(() => {
        const canvas = document.getElementById("myCanvas");
    //     const context = canvas.getContext("2d");
    //     context.fillRect(0,0, 100, 100);
    // })

    // context.rect(20, 40, 50, 50);
    // context.fillStyle = "#FF0000";
    // context.fill();
    // context.closePath();

    return (
        <>
            <canvas

                ref={(canvas) => this.context = canvas.getContext('2d')}
                className="breakout"
            >
            </canvas>
        </>
    )
}

