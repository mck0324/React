import { useState } from 'react';
import './App.css';

// function App() {
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decreamentItem = () => setItem(item - 1);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start</h2>
//       <button onClick={incrementItem} >Increment</button>
//       <button onClick={decreamentItem}>Decrement</button>
//     </div>
//   );
// }


// 똑같은걸 기존의 방식(Class Component)으로 만들어보기
class AppUgly extends React.Component{
  state = {
    item : 1
  }
  render(){
    const {item} = this.state;
    return (
      <div>
        <h1>Hello {item}</h1>
        <h2>Start</h2>
        <button onClick={this.incrementItem} >Increment</button>
        <button onClick={this.decreamentItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  decreamentItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };
}

// export default App;

