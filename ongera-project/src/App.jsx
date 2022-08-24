// import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Home from './components/landingPage/Home'
import About from './components/About/About'
import Choose from './components/choose/Choose'
import Choose2 from './components/choose/Choose2'
import Testimony from './components/testimony/Testimony'
import Testimony2 from './components/testimony/Testimony2'
import News from './components/news/News'
import News2 from './components/news/News2'
import Partners from './components/partners/Partners'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Choose/>
      <Choose2/>
      <Testimony/>
      <Testimony2/>
      <News/>
      <News2/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
