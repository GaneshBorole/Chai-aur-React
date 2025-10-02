import { useState } from 'react';
import './App.css'

function App() {
  let[counter,setCounter]= useState(15);
  // let Counter=5;
  
  const Addvalue=()=>{
    console.log("value added",counter);
  
    setCounter(counter+1)
  }
  const removeValue=()=>{
    console.log("value is removed");
    setCounter(counter-1)
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={Addvalue}>Add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}



export default App
