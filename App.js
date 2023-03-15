import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavTabs from './components/NavTabs';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contacts from './components/pages/contacts';
import 

function App() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Wrapper>
          <FooterComponent />
        // </div>
      // </Router>
    );
  }
  
  export default App;