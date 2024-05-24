/* eslint-disable react/no-unescaped-entities */
import Me2 from '/public/Images/Me2.jpg'
import { GiGraduateCap } from 'react-icons/gi'
import { BsTelephoneForward } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import '../Aboutm/Aboutm.css'

const Aboutm = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>


    <div className="container about_container">
        <div className="about_me">
            <div className="about_me_image">
                 <img src={Me2} alt="Chauncey" />
            </div>
        </div>

    <div className="about_content">
        <div className="about_cards">
            <article className="about_card">
                <GiGraduateCap className='about_icon'/>
                <h5>Degree</h5>
                <small>
                    B.A. Media & Communications <br />
                    <i>City College of New York</i>
                </small>
            </article>
            <article className="about_card">
                <TfiWorld className='about_icon'/>
                <h5>Madrid</h5>
                <small>
                   Calle Manuel Fernandez Caballero, 1, 28019, Madrid Spain
                </small>
            </article>
            <article className="about_card">
                <BsTelephoneForward className='about_icon'/>
                <h5>Contact</h5>
                <small>
                   <ul>
                    <li>Phone: +34 722-84-4541</li>
                    <li>Email: Chaunceydrb@gmail.com</li>
                   </ul>
                </small>
            </article>
        </div>
        <p>
        Hello! I'm Chauncey Lovell Darby, a passionate Junior Front-End Web Developer with a keen eye for design and a love for creating engaging user experiences. I thrive on turning ideas into interactive, responsive websites that not only look great but also function seamlessly across various devices.
        With a solid foundation in HTML, CSS, and JavaScript, I am constantly honing my skills and exploring new technologies to stay at the forefront of web development trends. I believe in the power of clean, efficient code and enjoy the challenge of bringing designs to life through innovative solutions.
        When I'm not coding, you can find me experimenting with new design trends, attending tech meetups, or diving into online tutorials to expand my knowledge. I am excited to collaborate with like-minded individuals and contribute to projects that push the boundaries of web development.
        Let's connect and create something amazing together!
        </p>
    </div>

    </div>
   </section>
  )
}

export default Aboutm