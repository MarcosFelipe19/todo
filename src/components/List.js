import React from "react";
import ListItem from './ListItem'


function List(props) {

    return (
        <ul>
            {props.items.map(item => <ListItem  key={item.id} item={item} onDeletedItem={props.onDeletedItem} onUpdateDone={props.onUpdateDone} ></ListItem>)}
        </ul>
    )
}

export default List