import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={'Rohit'} feedback={"Your Teaching Skills is soo good"}/>
            <TestimonialCard name={'Deepak'} feedback={"Wow what a Portfolio this is great"}/>
            <TestimonialCard name={'Ajay'} feedback={"Amazing work and Skills"}/>
        </section>
    </div>
  )
}

export default Testimonial