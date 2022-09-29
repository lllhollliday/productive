//import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
//import ToDoList from "./components/ToDoList";
// import "./App.css";



function App() {
  /*   const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo([todo, ...todos]);


  } */

  return (
    <div className="App">
          <input type="checkbox"/>
    <li>{todo.task}</li>
    <button>Add Task</button>
      <ToDoForm />
    </div>
  );
}

export default App;
