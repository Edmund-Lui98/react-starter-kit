import React, { useState } from 'react'
import Todoform from './Todoform'

function Todo({todos, completeTodo}) {
    const [edit, setEdit] = useState({id: null, value: ""});

  return todos.map((todo, index) => (
    <div key={index}>
        <div key={todo.id} onClick={completeTodo(todo.id)}>
            {todo.text}
        </div>
    </div>
  ))
}

export default Todo