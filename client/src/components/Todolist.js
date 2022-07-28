import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo';

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        
        console.log(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    // const updatedTodos = (todoId, newValue) => {
    //     if (!todo.text || /^\s*$/.test(todo.text)) {
    //         return
    //     }

    //     setTodos()
    // }

    return (
        <div>
            <h1>What do you want to do today?</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>            
        </div>
    )
}

export default Todolist