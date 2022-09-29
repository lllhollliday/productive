import React, { useState } from "react";

function ToDoForm(props) {
  const [todo, setTodo] = useState({
    task: "", // What the task is
    completed: false, // Has the todo already been completed?
  });


 function handleSubmit(e){
    e.preventDefault();
    if (e.target.name === 'task'){
        setTodo(e.target.value)
        } else (alert('Please enter a task'))
    }   
 


  return (
    <form onSubmit={handleSubmit}>
      <input 
      name="task"
      type="text"
      value={this.todo.task}
      onChange={this.taskInput}
      />
     
    </form>
  );
}

export default ToDoForm;
