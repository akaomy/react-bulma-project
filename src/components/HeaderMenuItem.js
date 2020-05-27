import React from "react";

function HeaderMenuItem(props) {
    const displayTextMenuItem = () => {
        props.actionItem(props.menuItem)
    }
    return (
        <a
            href="#"
            onClick={displayTextMenuItem}
            className="navbar-item"
        >
            {props.menuItem}
        </a>
    )
}


export default HeaderMenuItem;