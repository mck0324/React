import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("i run only once");
//   },[]);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes");
//   },[keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   },[counter]);
//   useEffect(() => {
//     console.log("I run when 'keyword'&'counter' changes");
//   },[keyword,counter]);

//   return (
//     <div className="App">
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here...." />
//       <h1 className={styles.title}>Welcome back!!</h1>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click</button>
//       <Button text={"Continue"} />
//     </div>
//   );
// }

//Cleanup Function
function Hello() {
  // function destroyFn() {
  //   console.log("Bye");
  // }
  // function effectFn() {
  //   console.log("created :)!");
  //   return destroyFn;
  // }
  // 코드스타일#1
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  },[]);
  // 코드스타일#2
  // useEffect(function () {
  //   console.log("hi");
  //   return function () {
  //     console.log("bye");
  //   }
  // },[]);

  
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null }
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
