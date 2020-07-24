import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";

function Header(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    {props.siteLogo}
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {props.menuItems.map(item => {
                        return (
                            <HeaderMenuItem
                                key={item}
                                menuItem={item}
                                actionItem={props.action}
                            />
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}


export default Header;