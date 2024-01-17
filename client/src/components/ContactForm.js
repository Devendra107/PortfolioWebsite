import "./css/ContactForm.css";
import React, { useRef } from 'react';
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubot5od', 'template_81prn8m', form.current, 'F5Uy0LxDOjlwArKk8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    

    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
         <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Devendrayadav@gmail.com</h5>
            <a href="https://mail.google.com/mail/:devendra">send a messagae</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Devendra_Yadav</h5>
            <a href="https://www.instagram.com/mr_devend">send a messagae</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>829******5</h5>
            <a href="https://api.whatsapp.com/send?phone=8299115905" target='_blank'>send a messagae</a>
          </article>
        </div>

        {/* end of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

{/* <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            
            <input type="text" name="from_name" placeholder="Name" required></input>
            
            <input type="email" name="from_email" placeholder="Email" required></input>
            
            <textarea rows="5" placeholder="Type your message here" name="message" required/>
            <button className="btn" value="Send">Send</button>
          </form>
        </div> */}

      </div>
    </section>


    


  )
}

export default ContactForm
