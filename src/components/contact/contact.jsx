import React from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {BiMessageRoundedDetail} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ngp5sgp', 'template_2j8y24g', form.current, 'SilA1X5wjIYMKfpLi')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>eliphasmwenda18@gmail.com</h5>
          <a href='mailto:eliphasmwenda18@gmail.com' target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <BiMessageRoundedDetail className='contact__option-icon'/>
          <h4>Messager</h4>
          <h5>eliphasmwenda</h5>
          <a href='https://m.me/Èlïphåß Mwëñdå' target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+254797340200</h5>
          <a href="https://api.whatsapp.com/send?phone='+254797340200'" target="_blank">Send a Message</a>
        </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder ='fullname' required/>
        <input type='email' name='email' placeholder ='email address' required/>
        <textarea name='message' rows='7' placeholder ='Message' required> </textarea>
          <button type='submit' name='submit' className='btn btn-primary'> Send Message</button>
       </form>
      </div>
    </section>
  )
}
export default Contact;
