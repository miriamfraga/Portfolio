import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Data from '../data';
import emailjs from 'emailjs-com';

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleInputFocus = (event) => {
    const inputId = event.target.id;
    const label = document.querySelector(`label[for="${inputId}"]`);
    label.classList.add("form__label--active");
  };
  const handleInputBlur = (event) => {
    if (event.target.value === '') {
      const inputId = event.target.id;
      const label = document.querySelector(`label[for="${inputId}"]`);
      label.classList.remove("form__label--active");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nombre: name, 
      email: email, 
      mensaje: message
    };
    emailjs.send('service_55b64si','template_hwtettv',formData,'U2T7EIJmNGA4wOZyR')
    .then(res=>{
      alert("Enviado correctamente");
    })
    .catch((error) => {
      console.error('Error sending the email:', error);
    });
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="div__contact">
           
             <div className="first__contact">
              <h2>Contact me!</h2>
             </div>
      <div className='div__contact__wrapper'>
        {!isSubmitted ? (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
              <label className="form__label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name= "nombre"
                value={name}
                onChange={handleNameChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>

            <div className="form__container">
              <label className="form__label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="form__container">
              <label className="form__label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="mensaje"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>

            <button className="button" type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Thank you for your message! I will get back to you soon.</p>
          </div>
        )}
      </div>
      <div className='contact'>
       <a href={Data.contact[0].way}><FontAwesomeIcon className='icon__social' icon={faLinkedinIn} /></a>
       <a href={Data.contact[1].way}><FontAwesomeIcon className='icon__social' icon={faGithub} /></a>
     </div>
    </section>
  );
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
