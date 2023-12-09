import React from 'react'

export const LearnEvent = () => {
    const handleClick1=(e)=>{
        e.preventDefault()
        console.log('Button Clicked 1');
    }
    const handleClick2=(MyID) =>{
       
        console.log('Button Clicked 1',MyID);
    }
  return (
    <>
    {/* Without argument */}
    <button onClick={handleClick1}>Click 1</button>
    {/* with argument */}
    <button onClick={(e)=>handleClick2("MyID")}>Click 2</button>
    
    </>
  )
}
