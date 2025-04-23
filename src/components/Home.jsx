import React, { useRef } from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from '../assets/me.png'

const Home = () => {

    const clientCount= useRef(null);
    const projectCount=useRef(null)

    const animationclientCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        })
    }

    const animationprojectCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        })
    }

    const animation ={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animation.h1} >
                    Hi, I Am <br /> Rohit Panwar
                </motion.h1>
                <Typewriter options={{
                    strings:["Developer", "Designer", "Creator"],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:"typewriterpara",
                }}>

                </Typewriter>
                <div>
                    <a href="mailto:rohitpanwar09871@gmail.com">Hire Me</a>
                    <a href="#work">Projects <BsArrowUpRight/> </a>
                </div>
                <aside>
                   <article>
                   <p>
                        + <motion.span whileInView={animationclientCount} ref={clientCount}>100</motion.span>
                    </p>
                    <span>Clients Worldwide</span>
                    <p>
                        + <motion.span whileInView={animationprojectCount} ref={projectCount}>100</motion.span>
                    </p>
                    <span>projects Done</span>
                   </article>
                    <article data-special>
                        <p>Contact</p>
                        <span>rohitpanwar09871@gmail.com</span>
                    </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Rohit" />
            
        </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home