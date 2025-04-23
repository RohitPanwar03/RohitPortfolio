import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.scss"
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import HeaderPhone from "./components/HeaderPhone";

function App() {


  const [menuOpen, setMenuOpen]=useState(false);

  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home/>
    <Work/>
    <TimeLine/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App;
