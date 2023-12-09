export const LearnInclineCss = () => {
    const btnStyle={
        color:'blue',
        backgroundColor:'orange',
        // borderRadius:'10px'
        borderRadius:'22px',
        fontSize:'20px',
        padding:'4px',
        margin:'5px'
        

    }

  return (
    <>
    <p style={{'fontSize':'40px','color':'red'}}>Hello React + Bite + GeekyShows</p>
    <button style={btnStyle}>Vite</button>
    <button style={{...btnStyle,...{'fontSize':'20px'}}}>Vite</button>
    
    </>
  )
}
