import React, {useState} from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css'


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div>
        <input className="todo-form" 
            type="text"
            placeholder="Type your new todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
        <button
            onClick={() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue);
                if(!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }          
            }}
            className="new-todo-button">
                Create Todo
         </button>
    </div>
    );
}
// connect is higher order function from redux that called with two different
// sets of arguments. The second argument is the component to be connected to redux store

// get the object state list specific to current form from the bigger list of different state
// in actual applicatio state contains more than one list of object state
const mapStateToProps = state => ({
    todos: state.todos,
});

// dispatch trigger a redux action when create too button is clicked in this case
const mapDispatchToProps = dispatch => ({
    onCreatePressed:text => dispatch(createTodo(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);