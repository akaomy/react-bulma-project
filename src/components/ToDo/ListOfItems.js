import React from "react";
import '../../App.css'

function TodoInput() {
    const allTasks = [
        {
            id: Math.random(),
            name: 'First todo',
            isDone: false
        },
        {
            id: Math.random(),
            name: 'Second todo',
            isDone: false
        },
        {
            id: Math.random(),
            name: 'Third todo',
            isDone: false
        }
    ]
        return (
            <div className="field">
                <ul>
                    {allTasks.map(item => {
                        return (
                            <li className="lisItem" key={item.id}>
                                <label className="checkbox listItem-checkbox">
                                    <input className="listItem--text" type="checkbox" />
                                    {item.name}
                                </label>
                                <a className="delete is-small"></a>
                            </li>
                        )
                    })}
                </ul>
        </div>
    );
}


export default TodoInput;