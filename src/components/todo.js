import React, {useState} from 'react';
import TodoList from './todoList';

function Todo(){
    const [currTodo, setCurrTodo] = useState('');
    const [todos, setTodos] = useState([]);

    console.log(currTodo)
    console.log(todos)

    function handleSubmit(event){
        event.preventDefault();

        setCurrTodo(event.currentTarget.todo.value);
    }

    return (
        <div className="todoContainer">
            <h2 className="title" >Todo</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Enter a todo</label>
                <input type="text" name="todo"/>
                <input type="submit" value="Add" />
            </form>
            <TodoList todos={todos} />
        </div>
    )
}

export default Todo;