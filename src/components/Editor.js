import React, {useState} from 'react';

function Editor({toDoList, addToDo, completedToDo}){
    const [input, addToList] = useState('');


const handleChange = (e) => {
    if (e.target.name === 'input') {
 addToList(e.target.value);
} else {alert('Please write a to-do');}

}

const createToDo = () => {
    addToDo({input: input});
    addToList('');
}

const remove = toDoList.map((todo, i) => (
    <tr key={i}>
         <td>{todo.input}</td>
         <td><button onClick={() => completedToDo(i)}>Completed</button></td>
    </tr>
))

return (
    <div className="container">
        <h2>Date here</h2>
        <table>
            <thead>
                <tr>
                    <th>To-Do</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {remove}
            </tbody>
        </table>
        <div>
            <input onChange={handleChange} name="front" value={input} placeholder="Front of Card" />

            <button onClick={createToDo} >Add Card</button>
        </div>
        <hr />

    </div>
)
}




export default Editor;
