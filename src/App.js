import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Investments from './components/Investments';
import Team from './components/Team';
import Footer from './components/Footer';
import StartupPortal from './components/startup-portal/StartupPortal.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Investments />
              <Team />
              <Footer />
            </>
          } />
          <Route path="/portfolio-portal" element={<StartupPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
