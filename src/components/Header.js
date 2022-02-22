import React from "react";

function Header(props) {
    return (
        <header>
            <h1>To Do</h1>
            <button onClick={props.onModalHide} className="addButton">+</button>
        </header>
    )
}

export default Header