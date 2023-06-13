import React from 'react'

import {Footer , Blog , Possibility , Features , About , Header} from './container'
import {Cta , Brand , Navbar} from './components'

import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>  
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <About/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
