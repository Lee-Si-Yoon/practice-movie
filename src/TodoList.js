//import Button from "./Button";
//import styles from "./App.module.css";
import { useState } from "react"; // useEffect

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //console.log(toDos)
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos :({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)} {/* react needs key in list*/}
      </ul>
    </div>
  );
}

export default App;
