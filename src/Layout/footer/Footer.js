import React from 'react';
import './footer.css';
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'

const Footer = () => {
  return (
           <div className='footer'>     
            <div className="footer_left_part">
              <p><span> SM </span>Porfolio</p>
              <div className="footer_icons">
              <AiOutlineMail className='contact_option-icon' />
              <AiFillLinkedin className='contact_option-icon' />
              <ImWhatsapp className='contact_option-icon' />
              </div>
            </div>     
            <div className="footer_middle_part">
             <h6>Key Services </h6>
              <p> Web Design</p>
              <p> Web Development</p>
              <p> Ofice management </p>
            </div>   
              <div className="copyright_section">
                <h6 className="copyright">@ Copyright SM Feroj 2023</h6>
                <h6 className="copyright">Design & Developed by SM Feroj </h6>
              </div>  
              </div>
           
  )
}

export default Footer