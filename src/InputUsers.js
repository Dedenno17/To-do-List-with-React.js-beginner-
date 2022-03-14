import { useState } from "react";

const InputUsers = (props) => {
    
    const [value, setValue] = useState('');
    

    return (
        <div className="input-users">
            <h2>Add an item...</h2>
            <input
                type='text'
                placeholder='Type item here...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={ () => props.handleAdd(value) }>add</button>
        </div>
    );
}
 
export default InputUsers;