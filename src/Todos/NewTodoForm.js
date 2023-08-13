import React, {useState} from "react";
import './NewTodoForm.css'

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div>
        <input className="" 
            type="text"
            placeholder="Type your new todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
        <button className="">Create Todo</button>
    </div>
    );
}

export default NewTodoForm;