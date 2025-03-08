import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Results from "./pages/Results";
import FSRR from "./pages/FSRR";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/results_5th_semester_regular" element={<FSRR />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
