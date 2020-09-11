import React from "react";
import "./ToDo.css"

export default function ToDoItem() {
    return (
        <div className="todo-item">
            <input className="todo-item" type="checkbox"/>
            <p className="todo-text">gotta do this</p>
            <a href="#" className="delete"></a>
        </div>
    )
}
