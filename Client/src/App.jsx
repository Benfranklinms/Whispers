import React from 'react'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path = '/sign-in' element = {<SignIn/>}></Route>
        <Route path = '/sign-up' element = {<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App