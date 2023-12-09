import React, { useEffect, useState } from 'react'

export const LearnUseEffect = () => {
    const [count,setCount]=useState(0)
    const handlCount=()=>{
        setCount(count+1)

    }
    const [randomNumber,SetRandomNumber]=useState(null);
    const generateRandomNumber=()=>{
        const newRandomNumber=Math.floor(Math.random()*100)+1;
        SetRandomNumber(newRandomNumber);
    }
    // UseEffect
    useEffect(()=>{
        console.log("Use Effect")

    })
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={handlCount}>Increase Count</button>
    <hr />
    <h2>Random : {randomNumber}</h2>
    <button onClick={generateRandomNumber}>Generate Random Number</button>

    
    </>
  )
}
