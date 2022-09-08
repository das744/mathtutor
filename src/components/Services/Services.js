import React from 'react'
import { NavLink } from 'react-router-dom'
import './Services.css'

const Services = () => {
  return (
    <>
  
 
        <div className="service_section row">
          <h2><span> My</span> Qualification and Services</h2>
        <div className="my_services">
                <div className="card">
                <i class="fa-solid fa-user-graduate img-responsive center-block d-block mx-auto"></i>
                    <div className="private_tutoring card-body">
                      <h3 className='text-center'>My Qualification</h3>
                      <ul class="center-block d-block mx-auto">
                     
                        <li>Achieved an ATAR of 96.75</li>
                        <li>Achieved a raw study score of 41 in VCE Mathmatical Method</li>
                        <li>Achieved a raw study score of 39 in VCE Specialist Mathmatics</li>


                      </ul>
                      
                   
                      <NavLink class="navbar-brand btn center-block d-block mx-aut" to="/Contact">
                                      Contact Me
                                    </NavLink>
                    
                    </div>
                  </div>
                <div className="card">
                    <div className="online-tutoring">
                        <i class="fa-solid fa-book-open-reader center-block d-block mx-auto"></i>
                        <div className="online_content card-body">
                        <h3 className='text-center'> Face-to-face Tutoring</h3>
                            <ul class="center-block d-block mx-auto"> 
                            <li>My private tutoring lessons 
                              describe the face-to-face interaction between myself 
                              and my students to provide the tution. 
                              Depending on what is most ideal or most challenging for the students, these lessons can take place either at the student's house or at a 
                              mutual location such as a library. </li>
                                {/* <li> I can travel to your house or local library/working area,
whatever you prefer.</li> 
                                <li></li>
                               
                                <li>I am affordable within your budget.</li> */}
                            </ul>
                           
                            <NavLink class="navbar-brand btn center-block d-block mx-aut" to="/Contact">
                                      Contact Me
                                    </NavLink>
                        </div>
                      </div>
                  </div>
        </div>
        </div>
    </>
  )    
}

export default Services