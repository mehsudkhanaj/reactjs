import React from 'react'

export const LearnStateUp = (props) => {
    const handleClick=(e)=>{
        e.preventDefault()
        let data="I am child";
        props.myclick(data)

    }
  return (
    <>
    <button onClick={handleClick}>Click 1</button>
    
    </>
  )
}
