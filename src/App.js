import './App.css';
import { useReducer } from 'react';

const initialState = {count: ""};

const reducer = (state, action) =>{
  switch (action.type) {
    case "delete":
      return {count: state.count.substring(0, state.count.length - 1)};
    case "one":
        return {count: state.count + "1"};
    case "two":
        return {count: state.count + "2"};
    case "three":
        return {count: state.count + "3"};
    case "four":
        return {count: state.count + "4"};
    case "five":
        return {count: state.count + "5"};
    case "six":
        return {count: state.count + "6"};
    case "seven":
        return {count: state.count + "7"};
    case "eight":
        return {count: state.count + "8"};
    case "nine":
        return {count: state.count + "9"};
    case "zero":
        return {count: state.count + "0"};
  }

  let lastChar = state.count.slice(-1);

  if(   
  lastChar == "+" ||
  lastChar == "-" ||
  lastChar == "*" ||
  lastChar == "/" ||
  lastChar == "." ||
  state.count.length == 0)return state;
  switch (action.type) {
    case "add":
      return  { count: state.count + "+"};
    case "minus":
      return {count: state.count + "-"};
    case "multiply":
      return {count: state.count + "*"};
    case "divide":
      return {count: state.count + "/"};
    case "equal":
      return {count: eval(state.count).toString()};
    case "dot":
        return {count: state.count + "."};
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <div className="display">{state.count.length > 0 ? state.count : 0}</div>
      <div className="buttons">
      <div onClick={() => dispatch({type: "one"})}>1</div>
      <div onClick={() => dispatch({type: "two"})}>2</div>
      <div onClick={() => dispatch({type: "three"})}>3</div>
      <div onClick={() => dispatch({type: "four"})}>4</div>
      <div onClick={() => dispatch({type: "five"})}>5</div>
      <div onClick={() => dispatch({type: "six"})}>6</div>
      <div onClick={() => dispatch({type: "seven"})}>7</div>
      <div onClick={() => dispatch({type: "eight"})}>8</div>
      <div onClick={() => dispatch({type: "nine"})}>9</div>
      <div onClick={() => dispatch({type: "zero"})}>0</div>
      <div onClick={() => dispatch({type: "dot"})}>.</div>
      <div onClick={() => dispatch({type: "equal"})}>=</div>
      <div className="operators">
        <div onClick={() => dispatch({type: "delete"})}>DEL</div>
        <div onClick={() => dispatch({type: "add"})}>+</div>
        <div onClick={() => dispatch({type: "minus"})}>-</div>
        <div onClick={() => dispatch({type: "multiply"})}>*</div>
        <div onClick={() => dispatch({type: "divide"})}>/</div>
        </div>
      </div>
    </div>
  );
}

export default App;
