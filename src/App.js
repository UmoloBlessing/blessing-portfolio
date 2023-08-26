import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="./About" element={<About />} />
            <Route path="./Projects" element={<Projects />} />
            <Route path="./Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}




export default App;

