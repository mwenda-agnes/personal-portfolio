import React from 'react';
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Mobile app UX and UI design services</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Cross-platform experiences design</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>UI and UX consulting</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Design workshops</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Web design services</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Portfolio Showcase</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Mobile-optimized Website</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Web Hosting</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Ecommerce Applications</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Web Support and Maintenance</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Graphic Design Services</p>
            </li>
            <li>
              <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Blog Writing Services</p>
            </li>
           <li> <AiOutlineCheckCircle  className='service__list-icon'/>
              <p>Copywriting Services</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}
export default services
