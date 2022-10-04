import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    // First create the structure in the app.js

    <div className="App">
      <div className="container">
        <Header />
        <div className="formContainer">
          <Form
            input={input}
            setInput={setInput}
            toDos={toDos}
            setToDos={setToDos}
          />
        </div>
        <div className="toDoListContainer">
          <ToDoList toDos={toDos} setToDos={setToDos} />
        </div>
      </div>
    </div>
  );
}

export default App;
