import React from 'react';

function Todo({ todo }) {
    return (
        <div>
        <input type="checkbox"/>
        <li>{todo.task}</li>
        <button>Add Task</button>
        </div>

    );
}

export default Todo;