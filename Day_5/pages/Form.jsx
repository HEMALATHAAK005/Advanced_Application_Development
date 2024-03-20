import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
