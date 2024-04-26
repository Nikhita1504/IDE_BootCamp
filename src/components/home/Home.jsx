import React from 'react'
import Navbar from '../../navbar/Navbar'
import Parallax from '../parallax/Parallax'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import About from '../../about/About'
import Hero from '../hero/Hero'

const Home = () => {
  return (
    <div>
      <section id="Homepage">
       <Navbar/>

       <Hero/> 
      </section>
       <section id = "Services"><Parallax type="services"/></section>
       <section><Services /></section>
       <section id = "Future-Enhancement"><Parallax type="portfolio" /></section>
       <Portfolio />
       <section id="Contact">
         <Contact />
       </section>
       
       {/* <About/> */}
      {/* <Test/> */}
    </div>
  )
}

export default Home
