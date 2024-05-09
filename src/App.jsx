import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
    </Provider>
    </>
  )
}

export default App
