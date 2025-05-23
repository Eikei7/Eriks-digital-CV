import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store';
import AboutMe from './pages/AboutMe';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Erik | Frontend Developer</title>
        <meta name="description" content="Digital CV of Erik, a passionate Frontend Developer specializing in React, JavaScript, and responsive web design." />
        <meta name="keywords" content="Frontend Developer, React Developer, Web Developer Portfolio, JavaScript Developer, UI/UX Design, Sundsvall Developer" />
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
    </>
  );
}

export default App;
