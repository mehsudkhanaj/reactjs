import React from 'react'
import { useState } from 'react';

export const CounterApp = () => {
    const [count,setCount]=useState(0);
    const handleCounter=()=>{
        setCount(count+1)
    }
    const resetCount=()=>{
        setCount(0)
    }
    const DecreaseCount=()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1>Count:{count} </h1>
    <button onClick={handleCounter}>Increase Count</button>
    <button onClick={resetCount}>Reset Count</button>
    <button onClick={DecreaseCount}>Reset Count</button>
    </>
  )
}
