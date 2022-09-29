import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ input, setInput, toDos, setToDos }) {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setToDos([...toDos, { id: uuidv4(), title: input, completed: false }]);
    setInput("")
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter task"
        value={input}
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        Add
      </button>
    </form>
  );
}
