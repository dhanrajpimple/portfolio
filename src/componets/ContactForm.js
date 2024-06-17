import React, { useState } from 'react';
import '../style.css/form.css'
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mzbnnyoo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });
    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    
      <div className='container mt-5 from-height d-flex justify-content-center align-items-center contact'>
        <div className='row w-100'>
          <div className='col-10 col-md-6 mx-auto'>
            <h1 className='text-center mb-4'>Contact Us</h1>
            <form onSubmit={handleSubmit} className='needs-validation d-flex justify-content-center align-items-center flex-column' noValidate>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <div className='invalid-feedback'>
                  Please enter your name.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <div className='invalid-feedback'>
                  Please enter a valid email address.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows='4'
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
                <div className='invalid-feedback'>
                  Please enter your message.
                </div>
              </div>
              <button type='submit' className='btn btn-primary send'>Send</button>
            </form>
          </div>
        </div>
      </div>
  )
};

export default ContactForm;
