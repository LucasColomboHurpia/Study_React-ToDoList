import React from "react"
import DoneIcon from "../Assets/DoneIcon.png"
import UndoneIcon from "../Assets/UndoneIcon.png"
import X from "../Assets/X.png"

function WichSymbol(props){
    if(props.done){
        return (<img src={DoneIcon} width="20px" alt="done" className="checkBtn" />)
    } else {
        return (<img src={UndoneIcon} width="20px" alt="undone" className="checkBtn" />)
    }
}

function List (props){

    return(
     <ul>
      {/* this returns an <li></li> tag for each item in array */}
      {props.items.map(item=>
                            <li key={item.id} className={item.done?"done listItem":"listItem"}>
                                <span onClick={()=>{props.markDoneItem(item)}}><WichSymbol done={item.done}></WichSymbol></span>
                                <span className="itemText">{item.text}</span>
                                <span onClick={()=>{props.deleteItem(item)}} className="closeBtn"><span><img src={X} alt="X" width="12px"/></span></span>
                            </li>
                            )}
     </ul>
    )

}

export default List