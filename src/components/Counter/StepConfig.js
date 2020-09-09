import React from 'react';

function StepConfig(props) {

    return (
        <div>
            <label> Enter step: </label>
            <input
                value={props.step}
                onChange={(e)=> {
                    // add check if there is letters are entered
                    // > error msg: only numbers are allowed
                    props.onStepChange(+e.target.value);}}
            />
        </div>
    )
}

export default StepConfig;