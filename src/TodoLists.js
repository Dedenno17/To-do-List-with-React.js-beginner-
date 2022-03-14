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
    
    const handleDelete = (id) => {
        const deletedItem = list.filter(item => item.id !== id);
        setList(deletedItem);
    }

    return (
        <div className="todo-lists">
            <InputUsers handleAdd={ handleAdd }/>
            <ListItem list={list} handleDelete={ handleDelete }/>
        </div>
    );
}
 
export default TodoLists;