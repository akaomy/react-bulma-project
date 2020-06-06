import React from 'react';

function StepConfig(props) {

    return (
        <div>
            <label> Enter step: </label>
            <input
                value={props.step}
                onChange={(e)=> {
                        const errMsg = document.getElementById('error-msg')
                        const red = errMsg.style.color = 'red';
                        let userInput = e.target.value;

                        if (typeof userInput === 'string' || userInput instanceof String)
                            errMsg.innerText = 'ONLY NUMBERS ARE ALLOWED';
                        else {
                            props.onStepChange(+userInput);
                        }
                    }
                } />
        </div>
    )
}

export default StepConfig;