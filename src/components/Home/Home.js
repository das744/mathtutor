import React from 'react'
import './Home.css'

import { NavLink } from 'react-router-dom'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Feature from '../Feature/Feature'



const Home = () => {
  return (
    <div> 
      <div className="hero row">
        <div className="hero_content">
        <h1>Welcome to Fredo’s Mathematics Tutoring</h1>
                <h5> Primary school – VCE Mathematics tutoring for the north-
eastern suburbs of Melbourne.</h5>
             
                <NavLink class="navbar-brand btn fade-in" to="/Contact">
                                      Contact Us
                                    </NavLink>

        </div>
      </div>

       
        <About/>
      <Feature/>
        <Services/>
        <Contact/>
    

    </div>
  )
}

export default Home