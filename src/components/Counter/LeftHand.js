import React from 'react';

function LeftHand(props) {

    const increaseVal = () => {
        props.changeCount(props.count + props.step);
    }

    const decreaseVal = (e) => {
        props.changeCount(props.count - props.step); 
    }

    return (
        <div>
            <button className="button" onClick={decreaseVal}>-</button>
            <button className="button" onClick={increaseVal}>+</button>
        </div>
    )
}

export default LeftHand;