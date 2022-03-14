import { useState } from "react";
import InputUsers from "./InputUsers";
import ListItem from "./ListItem";

const TodoLists = () => {

    const [list, setList] = useState([]);
    
    const handleAdd = (value) => {
        const idItem = 1 + Math.random();
        const newItem = {value : value, id : idItem};
        const newList = [...list]
        newList.push(newItem);

        setList(newList);
        // console.log(newList);
    } 

    return (
        <div className="todo-lists">
            <InputUsers handleAdd={ handleAdd }/>
            <ListItem list={list}/>
        </div>
    );
}
 
export default TodoLists;