import React from "react";
import Card from "./Card";

function Modal(props){
    function hide(e){
        if(e.target.id == 'modal'){
            props.onModalHide()
        }
    }

    return(<div id='modal' onClick={hide} className={props.modal ? 'modal' : 'modal hide'}>
        <Card>
            {props.children}
        </Card>
    </div>)
}

export default Modal