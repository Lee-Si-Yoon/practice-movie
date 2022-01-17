import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created!");
    return function () {
      console.log("destroyed");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setkeyWord] = useState("");
  const onChange = (event) => setkeyWord(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  //console.log("i run all time");
  useEffect(() => {
    console.log("i run once");
  }, []);
  useEffect(() => {
    if (keyWord !== "" && keyWord.length > 4) {
      console.log("keyword change runs me", keyWord);
      //setkeyWord("lalalal");
    }
  }, [keyWord]);
  //
  const [showing, setShowing] = useState(false);
  const onShow = () => setShowing((prev) => !prev);

  return (
    <div>
      <div>
        <input
          value={keyWord}
          onChange={onChange}
          type="text"
          placeholder="search here"
        />
        <h1 className={styles.title}>Welcome!</h1>
        <h3>{counter}</h3>
        <button onClick={onClick}>click me</button>
        <Button text={"gochujang"} />
      </div>
      <div>
        <button onClick={onShow}>{showing ? "hide" : "show"}</button>
        {showing ? <Hello /> : null}
      </div>
    </div>
  );
}

export default App;
