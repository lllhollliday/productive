import React from "react";


const ToDoList = ({ toDos, setToDos }) => {

const deleteToDo = ({id}) => {
        setToDos(toDos.filter((todo.id !== id)))
    }

  return (
    <div>
      {toDos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            className="list"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
        </li>
      ))}
      <div>
        <button onClick={() => deleteToDo(todo)}>Completed</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default ToDoList;
