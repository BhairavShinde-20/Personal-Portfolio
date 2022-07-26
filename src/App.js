import React from "react"
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
// import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    {/* <Features/> */}
    <Portfolio/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>

  );
}

export default App;
