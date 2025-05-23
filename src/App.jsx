import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store';
import AboutMe from './pages/AboutMe';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Erik Karlsson | Frontend Developer</title>
        <meta name="description" content="Digital CV of Erik, a passionate Frontend Developer specializing in React, JavaScript, and responsive web design." />
        <meta name="keywords" content="Frontendutvecklare, React utvecklare, webbutvecklare Portfolio, JavaScript utvecklare, UI/UX Design, Sundsvall webbutvecklare" />
        <meta name="author" content="Erik" />
        <link rel="canonical" href="https://frontend-erik.netlify.app/" />
      </Helmet>

      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<AboutMe />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;