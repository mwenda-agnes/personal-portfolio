import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscNewFolder} from 'react-icons/vsc';

const about = () => {
  return (
   <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>
   
   <div className='container about__container'>
     <div className='about__me'>
       <div className='about__me-image'>
        <img src= {ME} alt="About Image" />
       </div>
     </div>
     <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon' />
          <h5>Clients</h5>
          <small>30+ Clients</small>
        </article>
        <article className='about__card'>
          <VscNewFolder className='about__icon' />
          <h5>Projects</h5>
          <small>30+ Completed</small>
        </article>               
      </div>
      <div>
        <p>
        I work in both front- and back-end development. Clean programming and pixel-perfect design are things I can offer.
        Through the use of web animations, I also enhance websites' interactivity.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
     </div>
   </div>
  </section>
  )
}
export default about;
