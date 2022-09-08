import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>


<div>
      <div className="footer_section">
       
          <div className="copyright"> Copyright @2022

          </div>
          <div className="link_list">
          <ul className='links'>
          
          <NavLink to="/" > <li><i class="fa-sharp fa-solid fa-house"></i> Home</li> </NavLink>
          <NavLink to="/About" > <li> <i class="fa-solid fa-user"></i> About</li> </NavLink>
          <NavLink to="/Services" > <li><i class="fa-light fa-list-ul"></i>  Services</li> </NavLink>
          <NavLink to="/Contact" > <li><i class="fa-regular fa-address-book"></i>  Contact</li> </NavLink>
    
          </ul>

          </div>
          <div className="social_link">
            <ul>
              <li><i class="fa-brands fa-facebook"></i> Facebook</li>
              <li><i class="fa-brands fa-square-twitter"></i> Twitter</li>
              <li> <i class="fa-brands fa-square-instagram"></i> Instragram</li>
            </ul>

          </div>

       
      </div>



    </div>
        
        </div>
  )
}

export default Footer