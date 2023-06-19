import React, {useState} from 'react'
import "./App.css";
import Card from "./components/Card"

function App() {
  const [numberChange, setnumberChange] = useState('0');
  let numberIncreament = ()=>{
    setnumberChange(numberChange + 1);
  };
  let numberDecreament =()=>{
    setnumberChange(numberChange - 1);
  };
  let reset=()=>{
    setnumberChange(0)
  }
  return (
    <div className="h-screen flex justify-center items-center bg-teal-700">
      <Card numberChange={numberChange} numberIncreament={numberIncreament} numberDecreament = {numberDecreament} reset={reset}/>
    </div>
  );
}

export default App;
