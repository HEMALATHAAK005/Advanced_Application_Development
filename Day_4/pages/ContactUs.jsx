import React, { useState } from 'react';
import '../css/ContactUs.css'; 
import Navbar from '../Components/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear any previous validation errors for the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.contactNumber.match(/^\d{10}$/)) {
      newErrors.contactNumber = 'Contact number must be 10 digits';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      
      console.log('Form Data:', formData);
      setIsSubmitted(true); 
      
    } else {
      
      setErrors(newErrors);
      setIsSubmitted(false); 
    }
  };

  return (
    <div className="contact-us-container">
      <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/>
      <h1>Contact Customer Support</h1>
      <p>Feel free to get in touch with us using the contact form or call +1(555)123-4567</p>

      {isSubmitted ? (
        <div className="success-message">Message sent successfully!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.contactNumber}</div>
          </div>
          <button type="submit">Submit</button>
          <br/> <br/> <br/>
        </form>
        
      )}
    </div>
  );
};

export default ContactUs;
