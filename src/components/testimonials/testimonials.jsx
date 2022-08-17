import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const data = [
  {
    avatar: AVTR1,
    name: 'scola scola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquid ex cupiditate officiis quam ullam nesciunt suscipit quae obcaecati non deserunt alias Sapiente molestiae doloremque eum ipsum optio tempora libero eaque',

  },
  {
    avatar: AVTR2,
    name: 'scola scola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquid ex cupiditate officiis quam ullam nesciunt suscipit quae obcaecati non deserunt alias Sapiente molestiae doloremque eum ipsum optio tempora libero eaque',

  },
  {
    avatar: AVTR3,
    name: 'scola scola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquid ex cupiditate officiis quam ullam nesciunt suscipit quae obcaecati non deserunt alias Sapiente molestiae doloremque eum ipsum optio tempora libero eaque',

  },
  {
    avatar: AVTR4,
    name: 'scola scola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquid ex cupiditate officiis quam ullam nesciunt suscipit quae obcaecati non deserunt alias Sapiente molestiae doloremque eum ipsum optio tempora libero eaque',

  }
]

const testimonials = () => {
  return (
 <section id='testimonials'> 
  <h5>Review From Clients</h5>
  <h2>Testimonials</h2>
  <swiper className="container testimonial__container"
   // install Swiper modules
   modules={[Pagination]}
   spaceBetween={40}
   slidesPerView={1}
   pagination={{ clickable: true }}
  >
  {
      data.map(({avatar, name, review}, index) => {
        return(    
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {avatar}  alt="avatar one" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">
             {review}
            </small>
        </SwiperSlide>
        )
      })
    }
  </swiper>
 </section>
  )
}
export default testimonials
