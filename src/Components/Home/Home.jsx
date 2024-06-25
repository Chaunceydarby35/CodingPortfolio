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
            <h3>Hello, I'm</h3>
            <h1>Chauncey Lovell Darby</h1>
            <h3 className="text-light">Front-End Developer</h3>
            {/* <div className="home_social">
                <a href="https://www.linkedin.com/in/chauncey-darby-a8081826/">
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/Chaunceydarby35">
                    <BsGithub/>
                </a>
                <a href="https://medium.com/@chaunceydrb">
                    <BsMedium/>
                </a>
            </div> */}
            
            <div className="cta">
                <a href="https://drive.google.com/file/d/1sz7XZ3_swKgiZddnm6ivRWl6dzaPrKLE/view" download className="btn"> 
                    Download CV
                </a>
                <a href="#contact" className="btn btn-primary"> 
                    Contact Me
                </a>
            </div>
        

            {/* <div className="me">
                <img className="Me" src={Me} alt="Chauncey" />
            </div> */}
        </div>
    </header>
  )
}

export default Home