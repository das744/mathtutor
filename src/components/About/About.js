import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../assets/teacher-student.svg'
import './About.css'


const About = () => {
  return (
    <div>

      <div className="about_section">
        <div className="row">
          <div className="about_content col-md-5 col-sm-12 ">
          <h2>Welcome to  Fredo<span>'</span>s  Tutoring <i class="fa-solid fa-book-open-cover"></i></h2> 
                <p> I graduated in 2021 from Lloyd College, Watsonia. I achieved
an ATAR of 96.75. I am now studying a bachelor of science at
the University of Melbourne, planning on majoring in
mathematics and statistics.</p>
<p>I am passionate about maths and I hope to get a career in the
field.</p>
<p>My biggest skill is utilising the CAS calculator in a proficient
and efficient way, as well as working through questions till
full understanding is achieved.</p>
              
                <NavLink class="navbar-brand btn fade-in" to="/Contact">
                                      Contact Us
                                    </NavLink>

          </div>
          <div className="about_img col-md-5 col-sm-12 col-12 ">
          <img src={home} alt="" className='img'/>
          </div>

        </div>
        

        
      </div>
    </div>
  )
}

export default About