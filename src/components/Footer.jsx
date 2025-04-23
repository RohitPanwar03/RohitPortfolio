import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import me2 from "../assets/me2.jpeg"


const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me2} alt="founder" />
        <h2>Rohit Panwar</h2>
        <p>A ba asksfinonaosf aihsifh</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="google.com">
                    <AiFillLinkedin/>
                </a>
                <a href="google.com">
                    <AiFillInstagram/>
                </a>
                <a href="google.com">
                    <AiFillGithub/>
                </a>

            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp/>
        </a>

    </footer>
  )
}

export default Footer