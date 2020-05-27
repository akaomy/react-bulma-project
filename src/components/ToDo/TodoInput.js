import react from 'react';
import React from "react";

function TodoInput(props) {
        return (
            <div className="field">
                <label className="label">Todo:</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                        onChange={props.handleClick}
                    />
                </div>
            </div>
        );
    }


export default TodoInput;