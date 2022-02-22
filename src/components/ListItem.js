import React from "react";
import Card from './Card'
function ListItem(props) {
    return (
        <li>
            <Card className={props.item.done ? `item done` : 'item'}>
                {props.item.text}
                <div>
                    <label>
                        <input onChange={() => { props.onUpdateDone(props.item) }} type='checkbox'></input>
                        <span className="check"></span>
                    </label>
                    <img alt="deletar item" onClick={() => { props.onDeletedItem(props.item) }} src="./assets/icons8-lixo.svg"></img>
                </div>
            </Card>
        </li>
    )
}

export default ListItem