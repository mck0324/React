import { useState } from "react";

function Hook1() {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decreamentItem = () => setItem(item - 1);
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start</h2>
        <button onClick={incrementItem} >Increment</button>
        <button onClick={decreamentItem}>Decrement</button>
      </div>
    )
}

export default Hook1;