import { useState } from 'react'
import InputBox from './components/Inputbox'
import './App.css'

function App() {

  let [amount,setAmount]= useState(0);
  let [convertedAmount,setConvertedAmount] = useState(0);

  return (
    <>
    <div>
        <InputBox labelValue='From' amount={amount}/>
        <button className='bg-blue-700 text-white p-1'>Swap</button>
        <InputBox labelValue='To' amount={convertedAmount}/>
        <button className='bg-blue-700 text-white p-1'>Convert {} to {}</button>
    </div>
    </>
  )
}

export default App

/**
 * Here. labelValue represents the From and To label that will be passed as an argument to the input Box. It is just an attribute. */