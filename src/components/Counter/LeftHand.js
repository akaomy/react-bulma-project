import React from 'react';

function LeftHand(props) {

    const increaseVal = () => {
        props.changeCount(props.count + 1);
    }

    const decreaseVal = (e) => {
        props.changeCount(props.count - 1); 
    }

    return (
        <div>
            <button onClick={decreaseVal}>+</button>
            <button onClick={increaseVal}>-</button>
        </div>
    )
}

export default LeftHand;