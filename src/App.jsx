import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./sections/Home";
import About from './sections/About';
import Stories from './sections/Stories';
import Achivements from './sections/Achivements';
import FAQ from './sections/FAQ';
import Store from './sections/Store';
import Calculators from './sections/Calculators';


const App = () => {
  return (
      <>
      <Navbar />

      <div className="scroll-smooth">
        <Home />
        <About />
        <Stories />
        <Achivements/>
        <FAQ />
        <Store />
        <Calculators />
      </div>
  </>
  )
}

export default App
