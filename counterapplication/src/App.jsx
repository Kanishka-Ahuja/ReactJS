import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This is small project we are using Use state hooks 
/*
  Why we are using hooks ?
  We are using hooks because we can see If we want to update some UI at multiple locations. Then in classical javascript code we need to take reference of all the elements where the variable is present which becomes hectic and increases the code level. Thus, Reacts hooks provides us efficiency to update the UI in an efficient manner without using complex code. 
  In this scenario, we are trying to use useState hooks to make a small counter application. 
  
  How useState hook works ?

  Step 1: You need to import the hooks that are just methods from the react library itself
  Step 2: The useState() hook take some default value which can be of any type and returns an array containing two values i.e 
          variable : This variable is used to display values in UI
          method : The function hepls to update the value of the given variable.
          Now, we don't need to fetch the references where the variable is present to update the UI.
*/

function App() {
  //Traditional way 
  // let counter = 3;
  // const incrementCounter = ()=>{
  //   counter++;
  //   console.log(counter);
  // }

  //Using useState hook

  let [counter,setCounter] = useState(4);

  const incrementCounter = ()=>{
    if(counter<20)
    {
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
    }
  } 
  const decrementCounter = ()=>{
    if(counter>=1)
    {
      setCounter(counter-1);
    }
  } 
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementCounter}>Add value {counter}</button>
      <br/>
      <button onClick={decrementCounter}>Remove Value {counter}</button>
    </>
  )
}

export default App
