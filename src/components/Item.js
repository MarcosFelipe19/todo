class Item{

    static lastId = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : 0

    constructor(text){
        this.id = Item.lastId++
        localStorage.setItem('id', JSON.stringify(Item.lastId))
        this.text = text
        this.done = false
    }

}

export default Item