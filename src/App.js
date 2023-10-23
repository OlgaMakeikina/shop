
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import './App.css';
import Nav from './Navbar';

function App() {
  return <Router>
  <Nav/>
    <Routes>
  <Route path="/" element={<Shop/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
  }

export default App;
