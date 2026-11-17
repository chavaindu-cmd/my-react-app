import {BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Potfolio.jsx";
import Navbar from "./Navbar.jsx";

function App() {
    return(
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      
    )
 
}

export default App;
