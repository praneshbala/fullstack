// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <h2>Contact Us</h2>
      <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' required />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' rows='4' required></textarea>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
