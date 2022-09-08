import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>

      <div className="contact_section ">
      <h2><span> My </span> Contact Details</h2>
          <div className="my_details row">
          
                <div className="contact_info col-md-6 col-sm-12"> 
                    <p className="name"> Daniel Federico</p>
                    <p className="pho"> 0449 144 550 </p>
                    <p className='email'> 1daniel.federico@gmail.com</p>
                    <p className="address"> Diamond Creek</p>
                    <p className="availibity"> Flexible times, 7 days a week</p>


                </div>
                <div className="iframe_info col-md-6 col-sm-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50536.11770017585!2d145.1172100498676!3d-37.66078457531455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad649fcfc660d47%3A0x5045675218cd050!2sDiamond%20Creek%20VIC%203089!5e0!3m2!1sen!2sau!4v1661515785037!5m2!1sen!2sau"></iframe>
                  

                </div>
          
          </div>
    
       </div>
    </div>
  )
}

export default Contact