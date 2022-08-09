import React, { Profiler } from 'react'
import Header from './Components/Head/Header'
import Home from './Components/Hero/Home'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Resume />
    <Portfolio />
  </>
  )
}

export default App
