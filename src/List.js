import React from "react";
import "./Todo.css"

function DoneImg(props) {

    if(props.done){
        return(<img alt="done" className="binList" src="./assets/on.png"></img>)
    }else{
        return(<img alt="undone" className="binList" src="./assets/off.png"></img>)
    }

}

function List(props) {

    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                {item.text}
                <button onclick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>

                <button onClick={() => { props.onItemDeleted(item) }}>
                    <img alt="delete" className="binList" src="./assets/bin.png"></img>
                </button>
            </li>)}
        </ul>
    )

}

export default List