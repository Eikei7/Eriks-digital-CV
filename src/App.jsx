import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
