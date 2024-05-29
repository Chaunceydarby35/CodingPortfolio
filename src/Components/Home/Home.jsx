/* eslint-disable react/no-unescaped-entities */
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsMedium } from "react-icons/bs"
import './Home.css'
import Me from '/public/ME.png'

const Home = () => {
  return (
    <header id="home">
        <div className="container home_container">
            <h5>Hello, I'm</h5>
            <h1>Chauncey Lovell Darby</h1>
            <h5 className="text-light">Junior Front-End Developer</h5>
            <div className="cta">
                <a href="https://docs.google.com/document/d/1T2SZgILmTQb7THBnBAkXfY7bLj7_yXJ2/edit?usp=sharing&ouid=107299808604221766895&rtpof=true&sd=true" download className="btn"> 
                    Download CV
                </a>
                <a href="#contact" className="btn btn-primary"> 
                    Contact Me
                </a>
            </div>
            <div className="home_social">
                <a href="https://www.linkedin.com/in/chauncey-darby-a8081826/">
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/Chaunceydarby35">
                    <BsGithub/>
                </a>
                <a href="https://medium.com/@chaunceydrb">
                    <BsMedium/>
                </a>
            </div>

            <div className="me">
                <img className="Me" src={Me} alt="Chauncey" />
            </div>

            <a href="#contact" className="scroll_down">
                Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Home