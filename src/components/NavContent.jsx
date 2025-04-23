import React from 'react'

const NavContent = ({setMenuOpen}) => {
  return (
    <>
      <h2>Rohit.</h2>
    <div>
        <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
        <a onClick={()=>setMenuOpen(false)} href="#work">Work</a>
        <a onClick={()=>setMenuOpen(false)} href="#experience">Experience</a>
        <a onClick={()=>setMenuOpen(false)} href="#services">Services</a>
        <a onClick={()=>setMenuOpen(false)} href="#testimonial">Testimonials</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a onClick={()=>setMenuOpen(false)} href="mailto:rohitpanwar09871@gmail.com">
        <button>Email</button>
    </a>
    </>
  )
}

export default NavContent