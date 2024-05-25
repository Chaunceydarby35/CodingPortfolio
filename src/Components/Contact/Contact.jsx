import '../Contact/Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'


const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const response = await fetch('/send-message', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});

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
        <form id="contact-form"> 
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact