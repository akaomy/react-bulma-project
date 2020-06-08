import React from "react";
import '../App.css'

function Footer(props) {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
                    licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
                <p>
                    {props.menuItems.map(item =>
                        <li key={item} className={"navbar-footer-wrapper"}>
                            <a className="navbar-item">{item}</a>
                        </li>
                    )}
                </p>
            </div>
        </footer>
    )
}

export default Footer;