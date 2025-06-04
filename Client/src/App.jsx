import React from 'react'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AddConfession from './pages/AddConfession'
import Confessions from './pages/Confessions'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/sign-in' element = {<SignIn/>}></Route>
        <Route path = '/sign-up' element = {<SignUp/>}></Route>
        <Route path = '/add-confession' element = {<AddConfession/>}></Route>
        <Route path = '/confessions' element = {<Confessions/>}></Route>
        <Route path = '*' element = {<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App