import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Hook1 from './routes/useState';
import Hook2 from "./routes/useInput";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hook1">
          <Hook1 />
        </Route>
        <Route path="/hook2">
          <Hook2 />
        </Route>
      </Switch>
    </Router>
  );
}


// // 똑같은걸 기존의 방식(Class Component)으로 만들어보기
// class AppUgly extends React.Component{
//   state = {
//     item : 1
//   }
//   render(){
//     const {item} = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start</h2>
//         <button onClick={this.incrementItem} >Increment</button>
//         <button onClick={this.decreamentItem}>Decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
//   decreamentItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default App;

