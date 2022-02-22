import React, { useState } from "react";


function TodoForm(props) {

    const [text, setText] = useState("")

    function onChangeInput(e) {
        let text = e.target.value
        setText(text)
    }
    function addItem(e) {
        e.preventDefault()
        if(text){
            props.onAddItem(text)
            setText('')   
        }
    }

    return (
        <form>
            <input onChange={onChangeInput} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}


export default TodoForm