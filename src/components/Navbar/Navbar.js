import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
// import logo from '../assets/fredostutoring.png'

import './Navbar.css'

export const Navbar = () => {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'><NavLink to='/'><i class="fa-regular fa-sun-bright"></i> Fredos Tutoring</NavLink></h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
        </div>
        <ul className='links'>
          
        <NavLink to="/" > <li>Home</li> </NavLink>
        <NavLink to="/About" > <li> About</li> </NavLink>
        <NavLink to="/Services" > <li>Services</li> </NavLink>
        <NavLink to="/Contact" > <li>Contact</li> </NavLink>
  
        </ul>
    </nav>
  )
}
export default Navbar