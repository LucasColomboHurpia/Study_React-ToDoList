import React, { useState } from 'react'

function TodoForm (props){

    //create state //sets initial to ""
    const [text, setText] = useState("");

    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault() //normally, buttons calls an action to backend(like post). with this, this call is prevented
        if(text){
            props.updateItem(text);
            setText("");}
        }

    return(

    <form>
    <input className="inputText" onChange={handleChange} id="input" type="text" value={text} placeholder="So much to do!"></input>
    <button onClick={addItem}>Add</button>
    </form>
    
    )
}

export default TodoForm;