import { useState } from "react";
//import ToDoForm from "./components/ToDoForm";
//import ToDoList from "./components/ToDoList";
import Editor from "./components/Editor";
// import "./App.css";



function App() {

  const [toDoList, setToDoList] = useState([]);

  const addToDo = (todo) => {
    setToDoList(toDoList => [...toDoList, todo]);

  }

  const completedToDo = (index) => {
    const newToDo = toDoList.filter((todo, i) => i !== index);
    setToDoList(newToDo);
  }


  return (
    <div className="App">
 


      <Editor todoList={toDoList} addToDo={addToDo} completedToDo={completedToDo}/>

      </div>


  )
}

export default App;
