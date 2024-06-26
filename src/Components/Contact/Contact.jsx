import '../Contact/Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'


const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
              <MdOutlineEmail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>Chaunceydrb@gmail.com</h5>
              <a href="mailto:chaunceydrb@gmail.com">Send Message</a>
          </article>
          <article className="contact_option">
              <BsGithub className='contact_option_icon'/>
              <h4>Github</h4>
              <h5>github.com/Chaunceydarby35</h5>
              <a href="https://github.com/Chaunceydarby35">Open</a>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Contact