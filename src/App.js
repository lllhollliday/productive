import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
const [input, setInput] = useState("");
const [toDos, setToDos] = useState([])



  return (
    <div className="App">
      <Header />
      <Form
      input={input}
      setInput={setInput}
      toDos={toDos}
      setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos}/>

      </div>

  )
}

export default App;
