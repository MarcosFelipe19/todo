import React, { useEffect, useState } from "react";
import './Todo.css'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import List from './components/List'
import Item from './components/Item'
import Modal from './components/Modal'

function Todo() {

    const [items, setItems] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('items')))
    },[])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    },[items])
    
    function onAddItem(text) {
        let item = new Item(text)

        setItems([...items, item])
        onModalHide()
    }
    function onUpdateDone(item){
        let updateItemsDone = items.map(it => {
            if(it.id === item.id){
                if(it.done){
                    it.done = false
                }else{
                    it.done = true
                }
            } 
            return it
        })
        setItems(updateItemsDone)
    }
    function onDeletedItem(item){
        let updateItems = items.filter(it => {return it.id !== item.id})

        setItems(updateItems)
    }
    function onModalHide(){
        if(modal){
            setModal(false)
        }else{
            setModal(true)
        }
    }

    return (
        <div className="container">
            <Header onModalHide={onModalHide} ></Header>
                <List onUpdateDone={onUpdateDone} onDeletedItem={onDeletedItem} items={items}></List>
            <Modal onModalHide={onModalHide} modal={modal}><TodoForm onModalHide={onModalHide} onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo