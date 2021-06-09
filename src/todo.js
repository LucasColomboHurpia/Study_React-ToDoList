import React, { useEffect, useState } from 'react'
import List from "./Elements/list"
import TodoForm from "./Elements/todoForms"
import Item from "./Elements/item"


function Todo(){
    //create state //sets initial to empty array
    const [items, setItems] = useState([]);

    //Loads the items
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem("savedItems"))
        if (savedItems){setItems(savedItems)}
    },[]) //empty array, so it only happens once

    //saves the items
    useEffect(()=>{
        localStorage.setItem("savedItems", JSON.stringify(items))
     },[items]) // items in array, so it checks items to change

    //adds a new item
    function updateItem(text){
        let item = new Item(text)

            //deals with duplicated IDs
        if (items.filter(function(e) { return e.id === item.id; }).length > 0) {
            item.id = Math.random().toString(36).substring(7);
                  }

        //setItems(text) //sets the entire array to the "text"
        setItems([...items, item])  //sets the array again with what it already has and then adds "item"
    }

    //deletes an item
    function deleteItem(item){
        let filteredItems = items.filter(itemToDelete=>itemToDelete.id!==item.id)
        //set the array to everything but the selected item
        setItems(filteredItems)
        }

    //mars item as "done"
    function markDoneItem(item){
        let updateItems = items.map(it=>{
            if(it.id === item.id){
                it.done =! it.done
            }
            return it
        })
        setItems(updateItems)
    }

    return(
        
    <div className="container">
        <h1 className="Header"># To do List</h1>


        <TodoForm updateItem={updateItem}></TodoForm>
        <List items={items} deleteItem={deleteItem} markDoneItem={markDoneItem}></List>

    </div>
    )
}



export default Todo