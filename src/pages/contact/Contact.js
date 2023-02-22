
import React,{useState} from 'react'
import './contact.css';
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import swal from 'sweetalert';
const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_bzv0ek1',
   'template_lgcwyeb', 
   form.current, 
   '_YG58xdLQoN9mVF4Z'
   )
   .then(
    (result) => {
      swal({
        title: "Good job!",
        text: " Your Message is sent ",
        icon: "success",
        button: " Close!",
      });
      e.target.reset();
    },
    (error) => {
      setStatusMessage(`${error.text} happened`);
    }
  )

};

  return (
    <div id="contact">
      <h2> CONTACT</h2>
     <Container>
    <Row>
     <Col lg={6}> 
     <div className="contact_options">
{/*   ============= Message==================== */}
       <article className='contact_option'>
          <AiOutlineMail className='contact_option-icon' />
            <h3>sm.feroj27@gmail.com</h3>
            <a href="mailto:sm.feroj27@gmail.com" target= "/">Send Message</a>
          </article>
{/*              ==================Linked in============== */}
          <article className='contact_option'>
          <AiFillLinkedin className='contact_option-icon' />
            <h5> Linked In </h5>
            <a href="https://www.linkedin.com/in/sm-feroj-94b300249/" target= "/"> Discover Me</a>
            
          </article>
 {/*  ==================Whats app =========================== */}
          <article className='contact_option'>
           <ImWhatsapp className='contact_option-icon' />
            <h5>Whats app </h5>
            <a href="https://web.whatsapp.com/send?phone+8801724703700" target= "/" >Connect Me</a>
                
          </article>
       </div>
     </Col>
     
     <Col lg={6}>
      <div className="contact_container">
      
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='user_name' placeholder=' Your Full Name' required />
         <input type="email" name="user_email" placeholder='Your Email Address' required />
         <textarea name='message' rows="7" placeholder=' Write Your Message'>
         </textarea>
         <button type='submit' className='btn'> Send Message </button>
          </form>
          <p> {statusMessage}</p>  
     </div>
     </Col>
     </Row>
     </Container>

          
    </div>
    
    
  )
};

export default Contact;




        








// import React from 'react';
// import './contact.css';
// // import{Container} from 'react-bootstrap'
// import ContactUsHeader from './contactUsHeader/ContactUsHeader';
// import ContactUsBody from './contactUsBody/ContactUsBody';

// const Contact = () => {
//   return (
     
//      <>
//      <ContactUsHeader/>
//      <ContactUsBody/>
//      </>
//   )
// }

// export default Contact


