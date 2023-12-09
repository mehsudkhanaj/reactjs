import React, {  useState, useMemo} from 'react'

export const LearnUseMemo = () => {
    const [count,setCount]=useState(0)
    const handlCount=()=>{
        setCount(count+1)

    }
    const [randomNumber,SetRandomNumber]=useState(null);
    const generateRandomNumber=()=>{
        console.log("Generate Random Number Function");
        const newRandomNumber=Math.floor(Math.random()*100)+1;
        SetRandomNumber(newRandomNumber);
    };
    // const isCountTen=()=>{
    //     console.log("IsCountTen Called");
    //     if(count===10){
    //         return "Yes"
    //     }
    //     return "No"
    // }
    const isCountTen=useMemo(()=>{
        console.log("IsCountTen Called");
        if(count===10){
            return "Yes"
        }
        return "No"
    },[count])
    
  return (
    <>
    {/* <h1>Is {count} equal to 10? ----{isCountTen()}</h1> */}
    <h1>Is {count} equal to 10? ----{isCountTen}</h1>
    <button onClick={handlCount}>Increase Count</button>
    <hr />
    <h2>Random : {randomNumber}</h2>
    <button onClick={generateRandomNumber}>Generate Random Number</button>

    
    </>
  )
}
