import { useState } from "react"
export const LearnConditionalRendering = () => {
    const status=true
    const [isLogin,SetIsLogin]=useState(true)
  return (
    <>
    {status && <h1>Jimi Shani</h1>}
    {isLogin?
     (<><h1>Dashboard Page</h1>
     <button onClick={()=>SetIsLogin(false)}>Logout</button>
     </>):
      (<>
      <h1>Login Page</h1>
      <button onClick={()=>SetIsLogin(true)}>Login</button>
      </>) }

    </>
  )
}
