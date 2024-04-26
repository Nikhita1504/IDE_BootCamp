import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./about/About";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  const [activeSection, setActiveSection] = useState('Homepage');

  // Function to handle navigation
  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (<>

    {/* <Home/> */}
    <div className='min-h-screen'>
    <Outlet/>

   </div>
   {/* <About/> */}
     
      {/* <Test/> */}
    </>
  );

  
};

export default App;