import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'

const Footer1 = () => {
  return (
    <footer>
    <a href="#home" className='footer_logo'>Chauncey</a>
    <ul className='links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
    </ul>

    <div className='footer_social'>
        <a href="https://www.linkedin.com/in/chauncey-darby-a8081826/"><BsLinkedin/></a>
        <a href="https://github.com/Chaunceydarby35"><BsGithub/></a>
        <a href="https://medium.com/@chaunceydrb"><BsMedium/></a>
    </div>

    <div className='footer_copyright'>
        <small>&copy; Chauncey Lovell Darby. All Rights Reserved.</small>
    </div>
</footer>
  )
}

export default Footer1