import React from "react";
import { Home } from "./components/Home"
import { Carousel } from "./components/Carousel";
import { PufiRain } from "./components/PufiRain"
import { PufiPuff } from "./components/PufiPuff"
import { PufiCart } from "./components/PufiCart"
import { PufiNap } from "./components/PufiNap"
import { Espufi } from "./components/Espufi"
import { Footer } from "./components/Footer"
import './App.css';

function App() {
  return (
  <React.Fragment>
    <Home />
    <Carousel />
    <PufiRain />
    <PufiPuff />
    <PufiCart />
    <PufiNap />
    <Espufi />
    <Footer />
  </React.Fragment>
  );
}

export default App;
